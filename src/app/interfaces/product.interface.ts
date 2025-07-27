export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category: 'interior' | 'exterior' | 'waterproof';
  technicalSpecs: string[];
  mainInfo: Array<{
    key: string;
    value: string;
  }>;
  features: string[];
  howToApplyContent: {
    productInfoContent: string;
  };
}


export function isContentObject(content: string | { new: string; old: string }): content is { new: string; old: string } {
  return typeof content === 'object' && content !== null && 'new' in content;
}
