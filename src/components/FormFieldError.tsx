import React from 'react';
import cn from 'classnames';

function FormFieldError({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  return (
    <span
      className={cn('text-red-700 block mt-1 min-h-10', {
        visible: show,
        invisible: !show,
      })}
    >
      {children}
    </span>
  );
}

export default FormFieldError;
