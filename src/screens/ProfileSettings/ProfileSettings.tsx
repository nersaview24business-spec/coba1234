import {
  UserIcon,
  LayoutGridIcon,
  HelpCircleIcon,
  LogOutIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

const menuItems = [
  {
    id: "account",
    label: "Account Settings",
    icon: UserIcon,
  },
  {
    id: "framework",
    label: "Create or join framework",
    icon: LayoutGridIcon,
  },
  {
    id: "help",
    label: "Help Center",
    icon: HelpCircleIcon,
  },
];

interface ProfileSettingsProps {
  onClose?: () => void;
}

export const ProfileSettings = ({ onClose }: ProfileSettingsProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/20 fixed inset-0 z-50" onClick={onClose}>
      <Card
        className="w-full max-w-[600px] bg-white rounded-3xl shadow-lg overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/acg8oclj3xcdooeofjefstr-jbo0vrq-awvwtezvxh9g2yhlrgvj5o83-s96-c.png" />
                <AvatarFallback className="text-xl">Sam</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-zinc-950 text-2xl">
                  Sam
                </h2>
                <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-500 text-base">
                  sam@info.com
                </p>
              </div>
            </div>

            <Badge
              variant="secondary"
              className="[font-family:'Inter',Helvetica] font-semibold text-pink-600 text-lg px-4 py-1.5 bg-pink-50 hover:bg-pink-50 rounded-xl"
            >
              Pro
            </Badge>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-200 mb-6" />

          {/* Menu Items */}
          <div className="flex flex-col gap-2 mb-6">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="h-auto justify-start gap-3 px-4 py-4 [font-family:'Inter',Helvetica] font-medium text-zinc-700 text-lg hover:bg-zinc-50 rounded-xl"
              >
                <item.icon className="w-6 h-6 text-zinc-600" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-200 mb-6" />

          {/* Logout Button */}
          <Button
            variant="ghost"
            className="h-auto w-full justify-start gap-3 px-4 py-4 [font-family:'Inter',Helvetica] font-medium text-zinc-700 text-lg hover:bg-zinc-50 rounded-xl"
          >
            <LogOutIcon className="w-6 h-6 text-zinc-600" />
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};
