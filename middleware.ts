// middleware.ts
import { NextResponse } from 'next/server'
// Sửa dòng này: Thay 'next/request' bằng 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname === '/') {
        return NextResponse.redirect(new URL('/vi', request.url))
    }
}

export const config = {
    // Matcher này giúp loại bỏ các file tĩnh để middleware không chạy vô ích
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|2026_MTC_WEB|public).*)'],
}