import { forwardRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}
const ScrollWrapper = forwardRef<HTMLElement, SectionProps>(
  ({ id, children }, ref) => {
    return (
      <section id={id} ref={ref} className="scroll-mt-20 lg:scroll-mt-0">
        {children}
      </section>
    );
  }
);
export default ScrollWrapper;
