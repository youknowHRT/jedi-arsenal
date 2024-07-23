import path from "node:path";
import { format } from "prettier";
import type { BuiltInParserName } from "prettier";
import glob from "fast-glob";
import { pathComponents } from "./paths";
import {readFile, writeFile} from 'node:fs/promises'
import camelcase from 'camelcase'
import {emptyDir, ensureDir} from 'fs-extra'

const getName = (file: string) => {
  const filename = path.basename(file).replace(".svg", "");
  const componentName = camelcase(filename, { pascalCase: true, preserveConsecutiveUppercase: true, locale: 'en-US'})
  return {
    filename:`icon-${filename}`,
    componentName:`Icon${componentName}`,
  }
};

const formatCode = (code: string, parser: BuiltInParserName = "typescript") =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  });
const transformToVueComponent = async (file: string) => {
  const content = await readFile(file, "utf-8");
  const innerSvgContent = content.replace(/^.*<svg[^>]*>([\s\S]*?)<\/svg>.*$/, '$1');

  const { filename, componentName } = getName(file);
  const tsx = await formatCode(
  `
  import React from 'react';
  import {CreateIcon} from '../components/createIcon'

  const IconSvg = CreateIcon({
    content:(
      <>
      ${innerSvgContent}
      </>
    )
  })

  export default IconSvg
  `);
  writeFile(path.resolve(pathComponents, `${componentName}.tsx`), tsx, "utf-8");
};

const generateEntry = async (files: string[]) => {
  const code = await formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${componentName}'`
      })
      .join('\n')
  )
  await writeFile(path.resolve(pathComponents, 'index.ts'), code, 'utf-8')
}
const iconFiles = await glob("**/*.svg", { cwd: "svg", absolute: true });
await ensureDir(pathComponents)
await emptyDir(pathComponents)
await Promise.all(iconFiles.map(icon=>transformToVueComponent(icon)))
await generateEntry(iconFiles)