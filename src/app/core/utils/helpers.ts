// for typescript mixin https://www.typescriptlang.org/docs/handbook/mixins.html:
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
    });
  });
}

/* tslint:disable */
export function guid(): string {
  let d = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x7 | 0x8)).toString(16);
  });
}
/* tslint:enable */

// from @angular/cdk:
/** Shallow-extends a stylesheet object with another stylesheet object. */
export function extendStyles(dest: CSSStyleDeclaration, source: CSSStyleDeclaration): CSSStyleDeclaration {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      dest[key] = source[key];
    }
  }

  return dest;
}

export function calculatePosition(event: MouseEvent): CSSStyleDeclaration {
  const styles = {} as CSSStyleDeclaration;
  const offsetX = event.clientX;
  const offsetY = event.clientY;
  let transformString = '';

  if (offsetX) {
    transformString += `translateX(${offsetX}px) `;
  }

  if (offsetY) {
    transformString += `translateY(${offsetY}px)`;
  }

  styles.transform = transformString.trim();
  styles.position = 'absolute';
  return styles;
}

export function initBooleanTrue(value: boolean | undefined | null): boolean {
  return typeof value === 'boolean' ? value : true;
}
