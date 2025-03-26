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
  Angry,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SidebarItem from "./Sidebaritem";
import UserTable from "./Table";
import DataTable from "./Table";
import Card from "./card";

export default function SidebarStudent() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[250px_1fr]">
      <AppSidebar />
      <main className="flex flex-col">
        <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-white px-4 shadow-sm">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="ml-auto">
            <Button variant="outline" size="sm" className="bg-orange-500">
              Upgrade
            </Button>
          </div>
        </header>
        <div className="flex-1 p-4 md:p-6">
          <div className="mx-auto grid max-w-6xl gap-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card title={"Tareas"} description={"Aqui tus tareas"} Icon={Angry}/>
              <Card title={"Tareas"} description={"Aqui tus tareas"} Icon={Moon}/>
            </div>
            <DataTable />
          </div>
        </div>
      </main>
    </div>
  );
}

function AppSidebar() {
  return (
    <aside className="h-screen w-[250px] bg-orange-500 text-black p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="size-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
          K
        </div>
        <div>
          <div className="text-sm font-semibold">CEPRE UNAJMA</div>
          <div className="text-xs">Espacio de trabajo</div>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <SidebarItem icon={Home} label="Panel" active />
          <SidebarItem icon={Users} label="Usuarios" active={undefined} />
          <SidebarItem icon={FileText} label="Documentos" active={undefined} />
          <SidebarItem icon={BarChart3} label="Gráficas" active={undefined} />
        </ul>
      </nav>
      <div className="mt-auto">
        <SidebarItem icon={Settings} label="Ajustes" active={undefined} />
        <SidebarItem icon={HelpCircle} label="Ayuda" active={undefined} />
        <div className="border-t border-gray-700 mt-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-gray-600 rounded-full" />
            <div>
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-400">john@example.com</div>
            </div>
            <button className="ml-auto text-gray-400 hover:text-white">
              <LogOut className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
