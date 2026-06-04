import { SignUp } from "@clerk/nextjs";
import { Ghost, Sparkles, Users, FileText } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left panel — hidden on small screens */}
      <aside className="hidden lg:flex lg:w-1/2 flex-col bg-bg-elevated border-r border-border-default">
        <div className="flex flex-col justify-between flex-1 px-16 py-12">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-accent-primary flex items-center justify-center shrink-0">
              <Ghost className="h-4 w-4 text-bg-base" />
            </div>
            <span className="text-text-primary font-semibold text-sm tracking-tight">
              Ghost AI
            </span>
          </div>

          {/* Hero */}
          <div>
            <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">
              Design systems at the
              <br />
              speed of thought.
            </h1>
            <p className="text-text-secondary text-sm leading-relaxed mb-10">
              Describe your architecture in plain English. Ghost AI maps it to a
              shared canvas your whole team can refine in real time.
            </p>

            {/* Features */}
            <ul className="space-y-6">
              {features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="shrink-0 h-9 w-9 rounded-lg bg-bg-subtle border border-border-default flex items-center justify-center">
                    <Icon className="h-4 w-4 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium mb-0.5">
                      {title}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <p className="text-text-faint text-xs">
            © 2026 Ghost AI. All rights reserved.
          </p>
        </div>
      </aside>

      {/* Right panel — full width on small screens */}
      <div className="flex-1 flex items-center justify-center p-8 bg-bg-base">
        <SignUp />
      </div>
    </div>
  );
}
