import {TParagraphProps, TTextProps, TTitleProps} from "./types.ts";
import {SParagraph, SText, STitle} from "./style.tsx";

export const Title = ({ ...props }: TTitleProps) => {
  return (
        <STitle {...props} />
  );
};

export const Text = ({ ...props }: TTextProps) => {
  return (
        <SText {...props} />
  );
};



export const Paragraph = ({ ...props }: TParagraphProps) => {
  return (
        <SParagraph {...props} />
  );
};

