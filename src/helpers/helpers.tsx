export function addStylesConditionally(condition: boolean, styles: string): string {
    if (condition) {
      return styles;
    } else {
      return "";
    }
  }
  