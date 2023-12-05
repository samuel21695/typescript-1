interface Props {
  id?: string;
  style?: Partial<CSSStyleDeclaration>;
  [key: string]: any;
}

// 인터페이스의 사전적인 정의는 '약속'이다.
// typescript의 interface는 약속이다.

function createComponent(element: string, props: Props, children?: string[]): string {
  let tagParts = [`<${element}`];

  const styleToString = (style: Partial<CSSStyleDeclaration>): string => {
    const entries = Object.entries(style);
    const objectValues = entries.map(([key, value]) => `${key}: ${value};`);
    const result = objectValues.join(' ');
  };

  
}