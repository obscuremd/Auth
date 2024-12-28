import React from 'react';

interface TextProps {
  fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light';
  fontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 't1' | 't2' | 'body' | 'caption';
  text: string;
  color?: string;
  no_wrap?: boolean;
}

const TextUi: React.FC<TextProps> = ({ fontWeight = 'regular', fontSize = 'body', text, color, no_wrap }) => {
  const getFontSize = (size: string) => {
    switch (size) {
      case 'h1': return '48px';
      case 'h2': return '40px';
      case 'h3': return '33px';
      case 'h4': return '28px';
      case 'h5': return '23px';
      case 't1': return '19px';
      case 't2': return '16px';
      case 'body': return '13px';
      default: return '11px';
    }
  };

  const getFontWeight = (weight: string) => {
    switch (weight) {
      case 'bold': return 700;
      case 'semibold': return 600;
      case 'medium': return 500;
      case 'regular': return 400;
      case 'light': return 300;
      default: return 400;
    }
  };

  return (
    <p
      className={`${no_wrap && 'text-nowrap'} ${color || 'text-grayscale-500'}`}
      style={{
        fontSize: getFontSize(fontSize),
        fontWeight: getFontWeight(fontWeight),
        color: color || 'inherit'
      }}
    >
      {text}
    </p>
  );
};

export default TextUi;
