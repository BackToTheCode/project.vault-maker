type Keys = 'flex';
type TitleStyleProps = {
  [key in Keys]: string | number;
};

interface Styles {
  base: TitleStyleProps;
};

const styles: Styles = {
  base: {
    flex: 1
  }
};

export default styles;