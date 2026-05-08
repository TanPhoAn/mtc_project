// middleware.ts
import { NextResponse } from 'next/server'
// Sửa dòng này: Thay 'next/request' bằng 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Bỏ qua các file tĩnh, api, và các tệp trong public
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return
    }

    // 1. Lấy locale từ Cookie, nếu không có thì mặc định là 'vi'
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    const locale = cookieLocale || 'vi'

    // 2. Nếu người dùng cố tình gõ /vi hoặc /en trên URL, mình redirect về bản "sạch" (không prefix)
    // Đồng thời cập nhật Cookie nếu cần
    const hasLocalePrefix = ['/vi', '/en'].some(
        (prefix) => pathname.startsWith(`${prefix}/`) || pathname === prefix
    )

    if (hasLocalePrefix) {
        const newPathname = pathname.replace(/^\/(vi|en)/, '') || '/'
        const response = NextResponse.redirect(new URL(newPathname, request.url))
        
        // Cập nhật cookie nếu prefix khác với cookie hiện tại
        const prefix = pathname.split('/')[1]
        if (prefix !== cookieLocale) {
            response.cookies.set('NEXT_LOCALE', prefix, { path: '/', maxAge: 31536000 })
        }
        return response
    }

    // 3. Rewrite nội bộ: Người dùng thấy /about nhưng server xử lý /[lang]/about
    return NextResponse.rewrite(
        new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    )
}

export const config = {
    // Matcher này giúp loại bỏ các file tĩnh để middleware không chạy vô ích
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|2026_MTC_WEB|public).*)'],
}