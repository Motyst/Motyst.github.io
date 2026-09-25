/**
 * Design lab variants. Each id gets a full preview page at
 * /lab/preview/<id>/ (the real homepage with that one change applied).
 * The id is also set as <html data-lab="<id>">, so a component can style a
 * variant with :global(html[data-lab='<id>']) … or read a `variant` prop.
 * Once a pick is applied for real, remove its ids and content from here.
 */
export const labVariants: string[] = ['grid-centred', 'grid-bento', 'grid-list'];
