import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let cookie = request.cookies.get('next-js')
    // console.log(cookie.value)
    let isServices = request.nextUrl.pathname.startsWith('/services')
    let isRole = {
        role: 'admin',
        email: 'didi@gmail.com'
    }
    if (isServices && isRole.role !== 'admin') {
        return NextResponse.rewrite(new URL('/login', request.url))
    }
    return NextResponse.next()
}