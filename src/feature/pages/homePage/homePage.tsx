import { useKeenSlider } from 'keen-slider/react';
import './homePage.css';
import 'keen-slider/keen-slider.min.css';
import { data } from '../../../infrastructure/data/data';
import { House } from '../../wishes/model/house';
import { SearchForm } from '../../components/search.form';
import { ServicesPage } from '../servicesPage/servicesPage';

export const HomePage = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ]
    );

    return (
        <>
            <div ref={sliderRef} className="keen-slider container-highlight">
                {data.map((item: House) => {
                    return (
                        <li
                            key={item.id}
                            className="keen-slider__slide container-image"
                        >
                            <img
                                className="highlight-image"
                                src={item.image}
                                alt={item.street}
                                width="320px"
                            />
                        </li>
                    );
                })}
            </div>
            <SearchForm />
            <ServicesPage />
        </>
    );
};
