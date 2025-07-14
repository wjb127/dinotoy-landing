import { Star, ShoppingCart, Heart, Search, Menu, User, Truck, Shield, Phone, ArrowRight, Play, Gift, Zap, Award, Users, Clock, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🦕</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Dinotoy</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">브랜드 스토리</a>
              <a href="#why-us" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">왜 디노토이인가</a>
              <a href="#reviews" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">고객 후기</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">문의하기</a>
            </nav>

            <div className="flex items-center space-x-4">
              <a 
                href="https://smartstore.naver.com/dino-toy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
              >
                스토어 방문
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Menu className="w-5 h-5 text-gray-400 cursor-pointer hover:text-green-600 transition-colors md:hidden" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-medium">
                  <Zap className="w-5 h-5 mr-2" />
                  레고 전문가가 직접 운영하는 스마트스토어
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  레고의 모든 것,
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    디노토이에서 시작하세요
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  15년간 레고만 판매해온 전문 스토어<br />
                  정품 보장, 최저가 보장, 빠른 배송으로 레고 애호가들이 신뢰하는 1등 스토어
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://smartstore.naver.com/dino-toy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  지금 스토어 방문하기
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
                <button className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center">
                  <Play className="w-6 h-6 mr-3" />
                  브랜드 스토리 보기
                </button>
              </div>

              <div className="flex items-center justify-center space-x-16 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">15년</div>
                  <div className="text-lg text-gray-600">전문 운영</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">100K+</div>
                  <div className="text-lg text-gray-600">만족 고객</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">99.9%</div>
                  <div className="text-lg text-gray-600">정품 보장</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">4.9★</div>
                  <div className="text-lg text-gray-600">고객 평점</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">왜 디노토이를 선택해야 할까요?</h2>
            <p className="text-2xl text-gray-600">15년간 레고만 판매해온 전문성과 신뢰로 답합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-14 h-14 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">15년 전문 운영</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                2009년부터 레고만 전문으로 판매해온 노하우와 경험으로<br />
                고객님께 최고의 레고 쇼핑 경험을 제공합니다
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-14 h-14 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% 정품 보장</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                레고 코리아 정식 유통업체에서만 공급받는 정품만 판매<br />
                가품이나 짝퉁 걱정 없이 안심하고 구매하세요
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-14 h-14 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10만+ 고객 신뢰</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                누적 10만 명 이상의 고객이 선택한 신뢰할 수 있는 스토어<br />
                높은 재구매율과 고객 만족도를 자랑합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-6">디노토이 브랜드 스토리</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    2009년, 레고를 사랑하는 한 사람의 작은 꿈에서 시작된 디노토이는 
                    이제 대한민국 대표 레고 전문 스토어로 성장했습니다.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">15년간의 전문성</h4>
                      <p className="text-gray-600">레고만 전문으로 판매하며 쌓아온 깊은 지식과 노하우</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">고객 중심 서비스</h4>
                      <p className="text-gray-600">고객의 만족이 최우선, 언제나 친절하고 빠른 서비스 제공</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">신뢰할 수 있는 품질</h4>
                      <p className="text-gray-600">정품만 판매하는 원칙으로 고객들의 신뢰를 얻어온 역사</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8 flex items-center justify-center">
                    <span className="text-8xl">🏗️</span>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 flex items-center justify-center">
                    <span className="text-8xl">🚗</span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 flex items-center justify-center">
                    <span className="text-8xl">🏠</span>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 flex items-center justify-center">
                    <span className="text-8xl">🚀</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-3xl">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">고객들의 생생한 후기</h2>
            <p className="text-2xl text-gray-600">디노토이를 선택한 고객들의 진솔한 이야기를 들어보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "15년간 레고를 사면서 여러 곳을 이용해봤지만, 디노토이만큼 믿을 수 있는 곳은 없어요. 
                정품 보장은 물론이고 포장도 정말 꼼꼼하게 해주세요."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">김○○님</p>
                  <p className="text-sm text-gray-600">레고 컬렉터</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "아이가 레고를 너무 좋아해서 자주 구매하는데, 디노토이는 가격도 합리적이고 
                배송도 빨라서 항상 만족스럽게 이용하고 있습니다."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">박○○님</p>
                  <p className="text-sm text-gray-600">학부모</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "처음 레고를 구매할 때 걱정이 많았는데, 디노토이에서 친절하게 상담해주시고 
                추천해주신 제품이 정말 만족스러웠어요. 이제 단골이 되었습니다!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">이○○님</p>
                  <p className="text-sm text-gray-600">레고 입문자</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold mb-6">
              지금 바로 디노토이 스마트스토어에서<br />
              특별한 레고 경험을 시작하세요
            </h2>
            <p className="text-2xl opacity-90 mb-8">
              15년 전문성 · 정품 보장 · 빠른 배송 · 친절한 서비스
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://smartstore.naver.com/dino-toy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white text-green-600 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                네이버 스마트스토어 방문하기
                <ExternalLink className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group border-2 border-white text-white hover:bg-white hover:text-green-600 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                전화 상담 받기
              </button>
            </div>

            <div className="pt-8 text-lg opacity-80">
              <p>📞 고객센터: 1588-1234 | 📧 help@dinotoy.com</p>
              <p>운영시간: 평일 09:00~18:00 (주말 및 공휴일 휴무)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">🦕</span>
                </div>
                <span className="ml-3 text-xl font-bold">Dinotoy</span>
              </div>
              <p className="text-gray-400 mb-4">레고 전문 스마트스토어</p>
              <p className="text-gray-400">15년간 레고만 판매해온 전문성과 신뢰로 고객님께 최고의 레고 쇼핑 경험을 제공합니다.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">바로가기</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://smartstore.naver.com/dino-toy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">네이버 스마트스토어</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">브랜드 스토리</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">왜 디노토이인가</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">고객 후기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">고객센터</h4>
              <ul className="space-y-3 text-gray-400">
                <li>전화: 1588-1234</li>
                <li>이메일: help@dinotoy.com</li>
                <li>운영시간: 09:00~18:00</li>
                <li>주말 및 공휴일 휴무</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">회사정보</h4>
              <ul className="space-y-3 text-gray-400">
                <li>상호: 디노토이</li>
                <li>사업자등록번호: 123-45-67890</li>
                <li>통신판매업신고: 제2024-서울강남-1234호</li>
                <li>주소: 서울특별시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dinotoy. All rights reserved. 레고 전문 스마트스토어</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
