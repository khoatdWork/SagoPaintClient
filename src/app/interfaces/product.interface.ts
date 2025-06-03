export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category: 'interior' | 'exterior' | 'waterproof';
  technicalSpecs: string[];
  howToUse: string[];
  notes: string;
  mainInfo: {
    dryingTime: string;
    nextCoat: string;
    coverage: string;
    packaging: string;
    ingredients: string;
  };
  features: string[];
  howToApplyContent: {
    productInfoContent: string;
    preparationSteps: Array<{
      title: string;
      content: string | { new: string; old: string };
    }>;
    tools: string;
    thinning: string;
    thinningRatio: string;
    suggestedSystem: string[];
  };
}

export interface PreparationStep {
  title: string;
  content: string | { new: string; old: string };
}

export function isContentObject(content: string | { new: string; old: string }): content is { new: string; old: string } {
  return typeof content === 'object' && content !== null && 'new' in content;
}
