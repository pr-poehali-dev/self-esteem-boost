import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedTariff, setSelectedTariff] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTariffSelect = (tariff: string) => {
    setSelectedTariff(tariff);
    scrollToSection('registration');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-emerald-50 font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-xl text-indigo">
              Поднять самооценку
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('program')} className="text-gray-700 hover:text-indigo transition-colors">О программе</button>
              <button onClick={() => scrollToSection('author')} className="text-gray-700 hover:text-indigo transition-colors">Автор</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-indigo transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('tariffs')} className="text-gray-700 hover:text-indigo transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-indigo transition-colors">FAQ</button>
            </div>
            <Button onClick={() => scrollToSection('tariffs')} className="bg-indigo hover:bg-indigo-600">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald/10 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Icon name="Star" size={16} />
            Старт через 3 дня
          </div>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-gray-900 leading-tight mb-6">
            Поднять самооценку
            <span className="block text-indigo">за 21 день</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Пошаговая программа для развития уверенности в себе. 
            Практические техники, которые работают уже с первого дня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('tariffs')} 
              size="lg" 
              className="bg-indigo hover:bg-indigo-600 text-white px-8 py-4 text-lg font-medium"
            >
              Присоединиться к марафону
            </Button>
            <Button 
              onClick={() => scrollToSection('program')} 
              variant="outline" 
              size="lg" 
              className="border-indigo text-indigo hover:bg-indigo hover:text-white px-8 py-4 text-lg"
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-indigo mb-2">5,000+</div>
              <div className="text-gray-600">Участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-emerald mb-2">21</div>
              <div className="text-gray-600">День программы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-indigo mb-2">95%</div>
              <div className="text-gray-600">Довольных участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-emerald mb-2">3</div>
              <div className="text-gray-600">Года опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-gradient-to-br from-indigo-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Программа марафона
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              21 день структурированной работы над собой с ежедневными заданиями и поддержкой
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-indigo" size={24} />
                </div>
                <CardTitle className="font-montserrat">Неделя 1: Осознание</CardTitle>
                <CardDescription>Выявляем блоки и ограничивающие убеждения</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Диагностика текущего уровня самооценки</li>
                  <li>• Работа с внутренним критиком</li>
                  <li>• Техники самонаблюдения</li>
                  <li>• Дневник достижений</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-emerald" size={24} />
                </div>
                <CardTitle className="font-montserrat">Неделя 2: Трансформация</CardTitle>
                <CardDescription>Заменяем негативные паттерны на позитивные</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Аффирмации и визуализации</li>
                  <li>• Техники саморегуляции</li>
                  <li>• Работа с телом и осанкой</li>
                  <li>• Постановка личных границ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-indigo" size={24} />
                </div>
                <CardTitle className="font-montserrat">Неделя 3: Закрепление</CardTitle>
                <CardDescription>Интегрируем новые привычки в повседневную жизнь</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• План действий на будущее</li>
                  <li>• Техники поддержания прогресса</li>
                  <li>• Работа с окружением</li>
                  <li>• Празднование достижений</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Ваш наставник
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Анна Петрова — психолог-практик с 8-летним стажем, специалист по работе 
                  с самооценкой и личностным ростом.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="GraduationCap" className="text-indigo mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Образование</div>
                      <div className="text-gray-600">МГУ, факультет психологии</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="text-emerald mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Сертификация</div>
                      <div className="text-gray-600">Когнитивно-поведенческая терапия</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-indigo mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Опыт</div>
                      <div className="text-gray-600">Более 1000 индивидуальных консультаций</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/img/f5f2f295-c4f8-418b-92b3-a149eccda377.jpg" 
                  alt="Анна Петрова" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo to-emerald rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-indigo-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Отзывы участников
            </h2>
            <p className="text-xl text-gray-600">
              Истории людей, которые изменили свою жизнь за 21 день
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "За 21 день я научилась говорить 'нет', отстаивать свои границы и по-настоящему ценить себя. 
                  Это был невероятный опыт!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo to-emerald rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">Мария К.</div>
                    <div className="text-sm text-gray-500">Маркетолог</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Программа помогла мне избавиться от постоянного самобичевания. Теперь я замечаю свои успехи 
                  и горжусь собой."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald to-indigo rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">Алексей В.</div>
                    <div className="text-sm text-gray-500">Дизайнер</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Практические техники из марафона использую каждый день. Они действительно работают 
                  и помогают чувствовать себя увереннее."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo via-emerald to-indigo rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">Елена Р.</div>
                    <div className="text-sm text-gray-500">Учитель</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Тарифы марафона
            </h2>
            <p className="text-xl text-gray-600">
              Выберите формат участия, который подходит именно вам
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="font-montserrat text-center">Базовый</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2,990 ₽</div>
                  <div className="text-gray-500">за весь марафон</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    21 день программы
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Ежедневные задания
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Доступ к материалам
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Общий чат участников
                  </li>
                </ul>
                <Button 
                  onClick={() => handleTariffSelect('basic')}
                  className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo shadow-xl hover:shadow-2xl transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo text-white">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="font-montserrat text-center">Стандарт</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo">4,990 ₽</div>
                  <div className="text-gray-500">за весь марафон</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Все из тарифа "Базовый"
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Еженедельные вебинары
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Разбор домашних заданий
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Персональная обратная связь
                  </li>
                </ul>
                <Button 
                  onClick={() => handleTariffSelect('standard')}
                  className="w-full bg-indigo hover:bg-indigo-600"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="font-montserrat text-center">VIP</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">9,990 ₽</div>
                  <div className="text-gray-500">за весь марафон</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Все из тарифа "Стандарт"
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Индивидуальная консультация
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Персональный план развития
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-emerald" size={16} />
                    Поддержка 3 месяца после марафона
                  </li>
                </ul>
                <Button 
                  onClick={() => handleTariffSelect('vip')}
                  className="w-full bg-gradient-to-r from-indigo to-emerald text-white hover:opacity-90"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-indigo-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о марафоне
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 text-left hover:no-underline">
                Подходит ли марафон новичкам?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600">
                Да, программа разработана специально для людей без опыта работы с психологией. 
                Все техники объясняются простым языком с пошаговыми инструкциями.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 text-left hover:no-underline">
                Сколько времени нужно уделять ежедневно?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600">
                В среднем 30-45 минут в день на выполнение заданий. Все материалы доступны 24/7, 
                поэтому вы можете заниматься в удобное время.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 text-left hover:no-underline">
                Что если я пропущу несколько дней?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600">
                Ничего страшного! У вас будет доступ ко всем материалам в течение 3 месяцев после окончания марафона. 
                Вы сможете наверстать пропущенное в своем темпе.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 text-left hover:no-underline">
                Есть ли гарантия результата?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600">
                Мы гарантируем качество программы и поддержку. Если вы добросовестно выполните все задания, 
                но не увидите изменений, вернем 100% стоимости.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Registration Form */}
      {selectedTariff && (
        <section id="registration" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
                Регистрация на марафон
              </h2>
              <p className="text-gray-600">
                Тариф: <span className="font-medium capitalize">{selectedTariff}</span>
              </p>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (xxx) xxx-xx-xx" />
                  </div>
                  <Button className="w-full bg-indigo hover:bg-indigo-600 py-4 text-lg">
                    Записаться на марафон
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-montserrat font-bold text-xl mb-4">
                Поднять самооценку
              </div>
              <p className="text-gray-400 mb-4">
                Марафон для развития уверенности в себе за 21 день
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@marathon.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} />
                </div>
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={16} />
                </div>
                <div className="w-8 h-8 bg-indigo rounded-full flex items-center justify-center">
                  <Icon name="Youtube" size={16} />
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            © 2024 Марафон "Поднять самооценку". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}