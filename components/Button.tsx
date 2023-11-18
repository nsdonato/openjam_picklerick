type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({ className, ...props }: ButtonProps) {
  return <button className={className} {...props} />;
}
