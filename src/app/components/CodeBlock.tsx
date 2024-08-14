import React from 'react';
import Link from 'next/link';

const CodeBlock: React.FC = () => {
  return (
    <div className="mockup-code">
      <pre data-prefix="$"><code>Hello</code></pre>
      <pre data-prefix=">" className="text-warning"><code>Welcome...</code></pre>
      <pre data-prefix="$">
        <code className="whitespace-pre-wrap inline-block align-top sm:whitespace-nowrap">
          I am a Software Developer <span className="block sm:inline">focused on creating impactful </span><span className="block sm:inline">digital solutions.</span>
        </code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>
          <Link href="/home" className="hover:underline">
            Click here to see more.
          </Link>
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
