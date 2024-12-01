import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/common/ui/Dialog';
import { Button } from '@/components/common/ui/Button';
import { ExternalLink } from 'lucide-react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    title: string;
    description: string;
    content: {
      description: string;
      links?: { title: string; url: string }[];
      tips?: string[];
    };
  };
}

export const ResourceModal: FC<ResourceModalProps> = ({
  isOpen,
  onClose,
  resource,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{resource.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {resource.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <p className="text-muted-foreground">
            {resource.content.description}
          </p>
          
          {resource.content.tips && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Tips 💡</h3>
              <ul className="ml-6 list-disc space-y-2">
                {resource.content.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {resource.content.links && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Helpful Links 🔗</h3>
              <div className="flex flex-col gap-2">
                {resource.content.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-between"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    {link.title}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
