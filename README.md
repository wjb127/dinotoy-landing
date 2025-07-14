# 🦕 Dinotoy Landing Page

> 레고 전문 스마트스토어를 위한 프리미엄 랜딩페이지

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black)](https://vercel.com/)

## 🌟 프로젝트 개요

디노토이는 레고 전문 스마트스토어를 위한 랜딩페이지입니다. 브랜드의 전문성과 신뢰성을 강조하여 고객들을 네이버 스마트스토어로 유입시키는 것이 주요 목표입니다.

### 📱 라이브 데모
- **배포 URL**: [https://dinotoy-landing.vercel.app](https://dinotoy-landing.vercel.app)
- **스마트스토어**: [https://smartstore.naver.com/dino-toy](https://smartstore.naver.com/dino-toy)

## ✨ 주요 특징

### 🎨 디자인 & UX
- **현대적인 그라데이션 디자인**: 시각적 임팩트가 강한 그라데이션과 글래스모피즘 효과
- **반응형 디자인**: 모든 디바이스에서 완벽한 사용자 경험
- **부드러운 애니메이션**: hover 효과, 스케일링, 플로팅 요소 등 인터랙티브한 요소
- **직관적인 네비게이션**: 스티키 헤더와 스무스 스크롤링

### 🚀 성능 최적화
- **Next.js 15**: 최신 프레임워크로 빠른 로딩 속도
- **SEO 최적화**: 메타태그, 구조화된 데이터, 시맨틱 HTML
- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **코드 스플리팅**: 자동 번들 최적화

### 💼 비즈니스 중심 설계
- **브랜드 스토리텔링**: 전문성과 신뢰성 강조
- **사회적 증명**: 고객 후기, 통계, 인증 마크
- **명확한 CTA**: 스마트스토어 유입에 최적화된 버튼 배치
- **신뢰 지표**: 정품 보장, 고객 평점, 판매 실적 등

## 🛠 기술 스택

### Frontend
- **Next.js 15.3.5**: React 기반 풀스택 프레임워크
- **TypeScript**: 타입 안전성과 개발 생산성
- **Tailwind CSS 4.0**: 유틸리티 퍼스트 CSS 프레임워크
- **Lucide React**: 아이콘 라이브러리

### 배포 & 인프라
- **Vercel**: 자동 배포 및 CDN
- **GitHub**: 소스코드 관리
- **ESLint**: 코드 품질 관리

## 📁 프로젝트 구조

```
dinotoy-landing/
├── src/
│   └── app/
│       ├── page.tsx          # 메인 랜딩페이지
│       ├── layout.tsx         # 루트 레이아웃
│       └── globals.css        # 글로벌 스타일
├── public/                    # 정적 파일
├── package.json              # 의존성 관리
├── tailwind.config.ts        # Tailwind 설정
├── tsconfig.json            # TypeScript 설정
└── README.md                # 프로젝트 문서
```

## 🎯 핵심 섹션

### 1. Hero Section
- 강력한 헤드라인과 가치 제안
- 주요 통계 (100% 정품 보장, 10만+ 고객, 4.9★ 평점)
- 메인 CTA 버튼 (스마트스토어 방문)

### 2. 신뢰 지표
- 레고 코리아 정식 파트너
- 월 2,000건+ 판매 실적
- 네이버 스마트스토어 우수업체

### 3. 차별화 요소
- 전문 큐레이션 서비스
- 100% 정품 보장
- 10만+ 고객 신뢰

### 4. 브랜드 스토리
- 브랜드 성장 스토리
- 고객 중심 서비스 철학
- 신뢰할 수 있는 품질

### 5. 고객 후기
- 실제 고객들의 생생한 후기
- 5점 만점 평점 시스템
- 구매 횟수 등 신뢰도 강화

### 6. 강력한 CTA
- 네이버 스마트스토어 직접 연결
- 전화 상담 옵션
- 첫 구매 할인 혜택

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 로컬 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/wjb127/dinotoy-landing.git

# 프로젝트 디렉토리로 이동
cd dinotoy-landing

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📊 성능 지표

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Green (#059669, #047857)
- **Secondary**: Blue (#2563EB, #1D4ED8)
- **Accent**: Purple (#7C3AED), Yellow (#F59E0B)
- **Neutral**: Gray scales (#F9FAFB ~ #111827)

### 타이포그래피
- **Headings**: 56px ~ 20px (font-bold)
- **Body**: 18px ~ 14px (font-normal)
- **Line Height**: 1.5 ~ 1.75

## 🔧 커스터마이징

### 브랜드 컬러 변경
`tailwind.config.ts`에서 컬러 팔레트를 수정할 수 있습니다.

### 콘텐츠 수정
`src/app/page.tsx`에서 텍스트, 이미지, 링크를 수정할 수 있습니다.

### 애니메이션 조정
Tailwind CSS의 애니메이션 클래스를 사용하여 효과를 조정할 수 있습니다.

## 📈 SEO 최적화

- **메타 태그**: 제목, 설명, 키워드 최적화
- **Open Graph**: 소셜 미디어 공유 최적화
- **구조화된 데이터**: JSON-LD 스키마
- **시맨틱 HTML**: 접근성과 SEO 향상
- **사이트맵**: 검색엔진 크롤링 최적화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의사항

프로젝트에 대한 문의사항이나 웹개발 외주 의뢰는 아래로 연락주세요:

- **Email**: your-email@example.com
- **GitHub**: [@wjb127](https://github.com/wjb127)
- **Portfolio**: [Your Portfolio URL]

---

## 🎯 웹개발 외주 서비스

이 프로젝트는 웹개발 외주 서비스의 포트폴리오 사례입니다.

### 제공 서비스
- 🎨 **랜딩페이지 제작**: 브랜드에 맞는 맞춤형 디자인
- 🚀 **성능 최적화**: 빠른 로딩과 SEO 최적화
- 📱 **반응형 디자인**: 모든 디바이스 대응
- 🔧 **유지보수**: 지속적인 업데이트와 관리

### 개발 프로세스
1. **요구사항 분석**: 비즈니스 목표와 타겟 고객 파악
2. **디자인 기획**: 와이어프레임과 프로토타입 제작
3. **개발 구현**: 최신 기술 스택으로 개발
4. **테스트 & 배포**: 품질 검증 후 안전한 배포
5. **사후 관리**: 지속적인 모니터링과 개선

### 가격 정책
- **기본 랜딩페이지**: 50만원~
- **커스텀 기능 추가**: 별도 견적
- **도메인 & 호스팅**: 월 1만원~
- **유지보수**: 월 5만원~

*정확한 견적은 프로젝트 규모와 요구사항에 따라 달라질 수 있습니다.*

---

⭐ **이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**
