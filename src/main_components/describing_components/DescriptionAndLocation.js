export const DescriptionAndLocation=()=>{
    return(
        <section>
            <span>О НАС</span>
            <div>
                Адрес нашего гостевого дома - улица Крымская 264. В центре города.
                Удобное местоположение - 900 метров до пляжа (15 минут пешком через парк развлечений).
                В нескольких метрах есть остановка, откуда можно уехать по любому направлению.
                Рядом магазины: "Магнит", "Пятёрочка". Пиццерия, столовая, салоны красоты и парикмахерские.
                В пяти минутах ходьбы находится рынок, где вы можете купить продукты местных производителей
                и вкусно покушать. Наш гостевой дом предоставляет услуги короткосрочного и долгосрочного проживания,
                номера различной категории от эконом класса до комфорта.
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }} className='map' data-aos="zoom-in">
                <a href="https://yandex.ru/maps/1107/anapa/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                    Анапа
                </a>
                <a href="https://yandex.ru/maps/1107/anapa/house/krymskaya_ulitsa_264/Z04YdQRiSUUAQFpufXVxcXlkYw==/?ll=37.333525%2C44.901662&utm_medium=mapframe&utm_source=maps&z=15.93" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                    Крымская улица, 264 на карте Анапы — Яндекс Карты
                </a>
                <iframe src="https://yandex.ru/map-widget/v1/?ll=37.333525%2C44.901662&mode=whatshere&whatshere%5Bpoint%5D=37.332007%2C44.900577&whatshere%5Bzoom%5D=17&z=15.93"
                    width="560" height="400" frameBorder="1" allowFullScreen={true} style={{ position: 'relative' }}>
                </iframe>
            </div>
        </section>
    );
}