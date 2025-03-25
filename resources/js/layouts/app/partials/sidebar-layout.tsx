import { AppContent } from '@/layouts/app/partials/content';
import { AppShell } from '@/layouts/app/partials/shell';
import { AppSidebar } from '@/layouts/app/partials/sidebar';
import { AppSidebarHeader } from '@/layouts/app/partials/sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
