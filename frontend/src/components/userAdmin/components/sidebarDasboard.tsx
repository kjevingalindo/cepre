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
  School,
  Receipt,
  UserCog,
  Angry,
  Moon,
  GraduationCap,
  DollarSign,
  Calendar,
  Activity,
  Trash2,
  PlusCircle,
  Edit,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import SidebarItem from "@/components/userStudent/components/Sidebaritem";
import Card from "@/components/userStudent/components/card";
import DataTable from "@/components/userStudent/components/Table";

export default function SidebardAdmin() {
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
              <Card title={"Tareas"} description={"Aquí tus tareas"} Icon={Angry} />
              <Card title={"Tareas"} description={"Aquí tus tareas"} Icon={Moon} />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card title={"Total Estudiantes"} description={"245"} Icon={GraduationCap} />
              <Card title={"Pagos Pendientes"} description={"18"} Icon={DollarSign} />
              <Card title={"Exámenes Próximos"} description={"3"} Icon={Calendar} />
              <Card title={"Aulas Activas"} description={"12"} Icon={School} />
            </div>
            <div className="mt-8 rounded-lg border bg-card p-4 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Actividad Reciente</h2>
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Usuario</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Acción</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { user: "Juan Pérez", action: "Inscribió a un estudiante", time: "Hace 2 horas", icon: CheckCircle },
                    { user: "María Gómez", action: "Registró un pago", time: "Hace 3 horas", icon: DollarSign },
                    { user: "Carlos López", action: "Modificó una matrícula", time: "Hace 5 horas", icon: Edit },
                    { user: "Ana Torres", action: "Agregó una nueva aula", time: "Hace 7 horas", icon: PlusCircle },
                    { user: "Luis Fernández", action: "Eliminó un registro", time: "Hace 8 horas", icon: Trash2 },
                  ].map((activity, i) => (
                    <tr key={i} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                        <activity.icon className="size-5 text-gray-600" /> {activity.user}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{activity.action}</td>
                      <td className="border border-gray-300 px-4 py-2">{activity.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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


