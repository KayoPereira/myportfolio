import * as React from 'react'
import { cn } from '@/app/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('py-16 md:py-24', className)}
      {...props}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
)
Section.displayName = 'Section'

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-center mb-12 md:mb-16', className)}
    {...props}
  >
    {children}
  </div>
))
SectionHeader.displayName = 'SectionHeader'

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4',
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = 'SectionTitle'

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-lg text-muted-foreground max-w-2xl mx-auto',
      className
    )}
    {...props}
  />
))
SectionDescription.displayName = 'SectionDescription'

export { Section, SectionHeader, SectionTitle, SectionDescription }
