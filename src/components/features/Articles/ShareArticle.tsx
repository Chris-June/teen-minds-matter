import React from 'react';
import { Share2, Copy, Check, Twitter, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/ui/DropdownMenu';
import { toast } from '@/components/common/ui/Toast';
import { Article } from '@/types/article';

interface ShareArticleProps {
  article: Article;
}

export function ShareArticle({ article }: ShareArticleProps) {
  const [copied, setCopied] = React.useState(false);
  const shareUrl = `${window.location.origin}/articles/${article.slug}`;

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: copied ? Check : Copy,
      onClick: async () => {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast({
          title: "Link copied!",
          description: "Article link has been copied to your clipboard.",
          duration: 2000,
        });
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () => {
        const text = `Check out this article: ${article.title}`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
      },
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
      },
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      onClick: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
      },
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      onClick: () => {
        const text = `Check out this article: ${article.title} ${shareUrl}`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
      },
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {shareOptions.map((option) => (
          <DropdownMenuItem
            key={option.name}
            onClick={option.onClick}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <option.icon className="h-4 w-4" />
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
