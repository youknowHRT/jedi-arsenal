import { Icon, IconProps } from "."
import React from "react"
export interface CustomIconOptions {
  scriptUrl?: string | string[];
  extraCommonProps?: Record<string, unknown>;
}
const loadedSet = new Set<string>()

function isValidCustomScriptUrl(scriptUrl: string): boolean {
  return Boolean(
    typeof scriptUrl === 'string'
      && scriptUrl.length
      && !loadedSet.has(scriptUrl)
  );
}
function createScriptUrlElements(scriptUrls: string[], index:number=0){
  const currentScriptUrl = scriptUrls[index];
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    const script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);
    if (scriptUrls.length > index + 1) {
      script.onload = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
      script.onerror = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }
    loadedSet.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}
export default function createFromIconfont(options: CustomIconOptions) {
  const { scriptUrl, extraCommonProps = {} } = options;
  if (
    scriptUrl &&
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function'
  ) {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }
  const Iconfont = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { type,...rest} = props
    return (
      <Icon {...extraCommonProps} {...rest} ref={ref}>
        {type? <use xlinkHref={`#${type}`}/> : null}
      </Icon>
    )
  })
  return Iconfont
}

// export const IconFont = createFromIconfont('iconfont.js')
