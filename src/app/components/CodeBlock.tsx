// daisyUI Source: https://daisyui.com/components/mockup-code/
import React from 'react';

const CodeBlock: React.FC = () => {
  return (
    <div className="mockup-code">
      <pre data-prefix="$"><code>Hello!</code></pre>
      <pre data-prefix=">" className="text-warning"><code>welcome...</code></pre>
      <pre data-prefix="$"><code>I am a Software Developer focused on creating impactful digital solutions.</code></pre>
      <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
    </div>
  );
};

export default CodeBlock;
