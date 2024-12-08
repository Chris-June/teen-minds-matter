import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/common/ui/Dialog';
import { Button } from '@/components/common/ui/Button';

interface AboutCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    icon: JSX.Element;
    whyImportant: string;
    whyMatters: string;
    encouragement: string;
  };
}

export const AboutCardModal: FC<AboutCardModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              {content.icon}
            </div>
            <DialogTitle className="text-2xl font-bold">{content.title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-primary">Why It's Important to Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              {content.whyImportant}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-primary">Why It Matters</h3>
            <p className="text-muted-foreground leading-relaxed">
              {content.whyMatters}
            </p>
          </div>

          <div className="rounded-lg bg-primary/5 p-4">
            <p className="italic text-foreground">
              {content.encouragement}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
