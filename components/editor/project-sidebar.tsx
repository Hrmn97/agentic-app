"use client"

import { FolderOpen, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={`
        fixed top-12 left-0 bottom-0 z-50 w-72
        flex flex-col
        bg-bg-elevated border-r border-border-default
        transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-default">
        <span className="text-sm font-medium text-text-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col px-3 py-3 min-h-0">
        <Tabs defaultValue="my-projects" className="flex flex-col flex-1 overflow-hidden">
          <TabsList className="w-full">
            <TabsTrigger value="my-projects" className="flex-1">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">
              Shared
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="flex-1 mt-4">
            <div className="flex flex-col items-center justify-center py-12 gap-2 text-text-muted">
              <FolderOpen className="h-8 w-8 opacity-40" />
              <p className="text-sm">No projects yet</p>
            </div>
          </TabsContent>
          <TabsContent value="shared" className="flex-1 mt-4">
            <div className="flex flex-col items-center justify-center py-12 gap-2 text-text-muted">
              <FolderOpen className="h-8 w-8 opacity-40" />
              <p className="text-sm">No shared projects</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-3 border-t border-border-default">
        <Button variant="default" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
