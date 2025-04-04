import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
declare const Accordion: React.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    closeIcon?: React.ReactNode;
    openIcon?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
