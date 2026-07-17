# Hướng dẫn Deploy lên Cloudflare Pages

## Yêu cầu trước khi bắt đầu

- Một tài khoản GitHub
- Một tài khoản Cloudflare (miễn phí)
- Git đã cài đặt trên máy của bạn

## Bước 1: Tạo repository trên GitHub

1. Truy cập https://github.com/new
2. Đặt tên repository (ví dụ: `breadmc-website`)
3. Chọn Public hoặc Private
4. **Không** chọn Initialize with README, .gitignore, or license
5. Nhấn Create repository

## Bước 2: Đẩy code lên GitHub

Mở terminal trong thư mục dự án và chạy các lệnh sau (thay thế YOUR_USERNAME và REPO_NAME):

```bash
# Thêm remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Đổi nhánh chính thành main (nếu cần)
git branch -M main

# Đẩy code lên
git push -u origin main
```

## Bước 3: Deploy lên Cloudflare Pages

1. Truy cập https://dash.cloudflare.com/
2. Chọn **Workers & Pages** từ menu bên trái
3. Nhấn **Create application**
4. Chuyển sang tab **Pages**
5. Nhấn **Connect to Git**
6. Chọn tài khoản GitHub và repository bạn vừa tạo
7. Nhấn **Begin setup**
8. Cấu hình Build settings:
   - **Project name**: breadmc (hoặc tên bạn muốn)
   - **Production branch**: main
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
9. Nhấn **Save and Deploy**

## Bước 4: Hoàn tất!

Cloudflare Pages sẽ tự động build và deploy website của bạn. Sau khi hoàn tất, bạn sẽ nhận được một URL dạng `https://your-project.pages.dev`

## Tính năng tự động của Cloudflare Pages

- ✅ Auto-deploy khi có commit mới lên main branch
- ✅ Auto-compression (gzip/brotli)
- ✅ CDN toàn cầu
- ✅ SSL miễn phí
- ✅ Preview deployments cho các pull request

## Cấu hình tuỳ chọn (nếu cần)

### Thêm miền tuỳ chỉnh

1. Vào trang project trên Cloudflare Pages
2. Chọn tab **Custom domains**
3. Nhấn **Set up a custom domain**
4. Nhập tên miền của bạn và làm theo hướng dẫn

### Environment Variables

1. Vào tab **Settings** → **Environment variables**
2. Thêm các biến môi trường cần thiết
