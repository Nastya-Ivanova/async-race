export const htmlStringToElement = (htmlString: string): HTMLElement => {
  const template = document.createElement('div');
  template.innerHTML = htmlString.trim();
  return template.firstChild as HTMLElement;
};
