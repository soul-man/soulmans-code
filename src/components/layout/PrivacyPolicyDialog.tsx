import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export const PrivacyPolicyDialog = ({ children }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm dark:prose-invert space-y-6">
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">1. Introduction</h2>
            <p className="text-muted-foreground">
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit [Your Website URL] ("Website"). 
              By using our Website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">2. Information We Collect</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-primary">2.1 Information You Provide</h3>
              <p className="text-muted-foreground">When using our contact form, we collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>Any additional information you choose to provide</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-primary">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground">We use analytics tools to collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
                <li>Time spent on pages</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the collected information for:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Responding to your inquiries</li>
              <li>Improving our Website</li>
              <li>Analyzing visitor behavior and traffic</li>
              <li>Understanding our audience better</li>
              <li>Maintaining Website security</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">4. Data Storage and Security</h2>
            <p className="text-muted-foreground">
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">5. Third-Party Services</h2>
            <p className="text-muted-foreground">We use the following third-party services:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>[Analytics Service Name] for visitor tracking</li>
              <li>[Contact Form Service] for message handling</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">6. Cookies</h2>
            <p className="text-muted-foreground">
              Our Website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">7. Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">8. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our Website is not intended for children under 13 years of age, and we do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">10. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <span className="font-medium">[Your Contact Information]</span>
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 