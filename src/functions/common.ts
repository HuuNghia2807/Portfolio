import ScrollReveal from "scrollreveal";
const sr = ScrollReveal();

export const animateFunc = (list: string, position: string) => {
  sr.reveal(list, { origin: position });
};
