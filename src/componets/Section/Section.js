import Proptypes from "prop-types";
import { SectionWrapper } from "./Section.styled";

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: Proptypes.string,
};
