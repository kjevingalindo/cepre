"use client";

import * as React from "react";
import {
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  HelpCircle,
  LogOut,
  Table,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export default function SidebarDemo() {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full">
        <AppSidebar />
        <main className="flex flex-col">
          <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <span>Upgrade</span>
              </Button>
            </div>
          </header>
          <div className="flex-1 p-4 md:p-6">
            <div className="mx-auto grid max-w-6xl gap-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-xl border bg-card p-6">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">Card {i + 1}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      This is a card in the dashboard.
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border bg-card">
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <div className="text-center text-sm text-muted-foreground">
                      Chart placeholder
                    </div>
                  </div>
                </div>
                <div className="col-span-3 rounded-xl border bg-card">
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <div className="text-center text-sm text-muted-foreground">
                      Chart placeholder
                    </div>
                  </div>
                </div>
                <div className="col-span-7 rounded-xl border bg-card">
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <Table />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <span className="font-bold">A</span>
          </div>
          <div>
            <div className="text-sm font-semibold">CEPRE UNAJMA</div>
            <div className="text-xs text-muted-foreground">
              Espacio de trabajo
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <a href="#" className="flex items-center gap-2">
                <Home className="size-4" />
                <span>Panel</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center gap-2">
                <Users className="size-4" />
                <span>Usuarios</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center gap-2">
                <FileText className="size-4" />
                <span>Documentos</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center gap-2">
                <BarChart3 className="size-4" />
                <span>Graficas</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Ajustes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Settings className="size-4" />
                    <span>Ajustes</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <HelpCircle className="size-4" />
                    <span>Ayuda</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-muted-foreground">
              john@example.com
            </div>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <LogOut className="size-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

// Add this to your project if it doesn't exist
function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <span className="sr-only">Switch to light mode</span>
      ) : (
        <span className="sr-only">Switch to dark mode</span>
      )}
    </Button>
  );
}
