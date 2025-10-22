import {
  ChevronDownIcon,
  MessageCircleIcon,
  MoreVerticalIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { ProfileSettings } from "../ProfileSettings";

const navigationLinks = [
  { label: "Changelog", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Help", href: "#" },
];

const sidebarItems = [
  {
    id: "agents",
    label: "Agents",
    icon: "/component-1-4.svg",
    active: true,
  },
  {
    id: "usage",
    label: "Usage",
    icon: "/user-add-icon.svg",
    active: false,
  },
];

const workspaceSettingsItems = [
  { label: "General" },
  { label: "Members" },
  { label: "Plans" },
  { label: "Billing" },
  { label: "API keys" },
];

const agents = [
  {
    id: 1,
    title: "Belajar 30 Hari Cara Ngejokes Yang Benar.txt",
    lastTrained: "Last trained 4 hours ago",
    previewImage: "/belajar-30-hari-cara-ngejokes-yang-benar-txt-thumbnail.png",
    chatTitle: "Belajar 30 Hari Cara Ngejokes",
  },
];

export const ChatbaseDashboard = (): JSX.Element => {
  const [workspaceSettingsOpen, setWorkspaceSettingsOpen] =
    React.useState(true);
  const [showProfileSettings, setShowProfileSettings] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between px-5 py-4 bg-[#f9f9f9] border-b border-zinc-200">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" alt="Logo" src="/component-1-2.svg" />

          <span className="[font-family:'Inter',Helvetica] font-medium text-[#70707b4c] text-base">
            /
          </span>

          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 max-w-[200px]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-zinc-950 text-sm truncate">
                Habib Dwi K&#39;s works…
              </span>

              <Badge
                variant="outline"
                className="[font-family:'Inter',Helvetica] font-medium text-[#70707b] text-xs border-zinc-200 rounded-[14px]"
              >
                Free
              </Badge>
            </div>

            <Button variant="ghost" size="icon" className="h-auto w-auto p-0.5">
              <img
                className="w-4 h-4"
                alt="Dropdown"
                src="/component-1-1.svg"
              />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-3">
            {navigationLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                className="h-auto px-0 py-0 [font-family:'Inter',Helvetica] font-medium text-[#51515c] text-sm hover:bg-transparent"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="w-px h-6 bg-[#51515c] rounded-full" />

          <button
            onClick={() => setShowProfileSettings(true)}
            className="focus:outline-none"
          >
            <Avatar className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity">
              <AvatarImage src="/acg8oclj3xcdooeofjefstr-jbo0vrq-awvwtezvxh9g2yhlrgvj5o83-s96-c.png" />
              <AvatarFallback>HD</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-60 bg-[#f9f9f9] border-r border-zinc-200 overflow-y-auto">
          <nav className="flex flex-col gap-0 p-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.id}
                variant={item.active ? "secondary" : "ghost"}
                className={`h-auto justify-start gap-2 px-2.5 py-1.5 [font-family:'Inter',Helvetica] font-medium text-sm ${
                  item.active
                    ? "bg-white text-zinc-950 border border-zinc-200 shadow-[inset_0px_-1.5px_0px_1px_#0000000a]"
                    : "text-[#70707b]"
                }`}
              >
                <img className="w-5 h-5" alt={item.label} src={item.icon} />
                {item.label}
              </Button>
            ))}

            <Collapsible
              open={workspaceSettingsOpen}
              onOpenChange={setWorkspaceSettingsOpen}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-between gap-2 px-2.5 py-1.5 [font-family:'Inter',Helvetica] font-medium text-[#70707b] text-sm"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5"
                      alt="Workspace settings"
                      src="/component-1-5.svg"
                    />
                    Workspace settings
                  </div>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${workspaceSettingsOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="flex flex-col gap-1 pl-2 pt-1 border-l border-zinc-200 ml-2.5">
                  {workspaceSettingsItems.map((subItem) => (
                    <Button
                      key={subItem.label}
                      variant="ghost"
                      className="h-auto justify-start px-2.5 py-1.5 pl-6 [font-family:'Inter',Helvetica] font-medium text-[#70707b] text-sm"
                    >
                      {subItem.label}
                    </Button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="max-w-screen-2xl">
            <div className="flex items-center justify-between px-8 py-8">
              <h1 className="[font-family:'Inter',Helvetica] font-normal text-zinc-950 text-2xl tracking-[-0.48px]">
                Agents
              </h1>

              <Button className="h-auto gap-2 bg-zinc-950 text-[#f9f9f9] shadow-[inset_0px_-1.5px_0px_#0000000a] [font-family:'Inter',Helvetica] font-medium text-sm">
                <PlusIcon className="w-5 h-5" />
                New AI agent
              </Button>
            </div>

            <div className="px-8 pb-8">
              <div className="grid gap-6">
                {agents.map((agent) => (
                  <Card
                    key={agent.id}
                    className="max-w-[600px] overflow-hidden border border-zinc-200 rounded-[14px]"
                  >
                    <CardContent className="p-0">
                      <div className="relative bg-blue-600 overflow-hidden border-b border-zinc-200">
                        <div className="absolute inset-0 bg-blue-600">
                          <div
                            className="w-full h-full blur-[2.5px] bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${agent.previewImage})`,
                            }}
                          />
                        </div>

                        <div className="relative flex flex-col rounded-t-[14px] overflow-hidden">
                          <div className="flex items-center px-3 py-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_50%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-t-[15px]">
                            <span className="text-black text-[9.8px] tracking-[-0.20px] leading-[14.7px] [font-family:'Inter',Helvetica] font-medium truncate">
                              {agent.chatTitle}
                            </span>
                          </div>

                          <div className="flex flex-col gap-2 px-2 py-2 bg-white border-l border-r border-zinc-200">
                            <div className="max-w-[230px] h-3 bg-[#e4e4e780] rounded-[14px]" />
                            <div className="w-32 h-3 bg-[#3b81f6] rounded-[14px]" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between px-6 py-6">
                        <div className="flex flex-col gap-2">
                          <h3 className="[font-family:'Inter',Helvetica] font-medium text-zinc-950 text-base">
                            {agent.title}
                          </h3>
                          <p className="[font-family:'Inter',Helvetica] font-medium text-[#70707b] text-xs">
                            {agent.lastTrained}
                          </p>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-auto w-auto p-2 bg-[#ffffff01] border-zinc-200 shadow-[inset_0px_-1.5px_0px_1px_#0000000a]"
                            >
                              <MoreVerticalIcon className="w-6 h-6" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[260px] bg-white border border-[#e5e5e5] rounded-[16px] shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-2"
                          >
                            <DropdownMenuItem
                              className="flex items-center gap-3 px-4 py-3 rounded-[12px] cursor-pointer hover:bg-[#f9f9f9] transition-colors focus:bg-[#f9f9f9] outline-none"
                            >
                              <Trash2Icon className="w-5 h-5 text-[#ef4444]" />
                              <span className="[font-family:'Inter',Helvetica] font-medium text-[#ef4444] text-[15px]">
                                Delete Agent
                              </span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Button
        size="icon"
        className="fixed bottom-8 left-8 w-[55px] h-[55px] bg-black rounded-[27.5px] shadow-[0px_4px_8px_#00000033] hover:bg-black/90"
      >
        <MessageCircleIcon className="w-7 h-7 text-white" />
      </Button>

      {showProfileSettings && (
        <ProfileSettings onClose={() => setShowProfileSettings(false)} />
      )}
    </div>
  );
};
