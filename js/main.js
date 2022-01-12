import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const products = [
    {
        category: "甜甜圈",
        content: "尺寸：14x14cm",
        description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
        id: "-L9tH8jxVb2Ka_DYPwng",
        is_enabled: 1,
        origin_price: 150,
        price: 99,
        title: "草莓莓果夾心圈",
        unit: "個",
        num: 10,
        imageUrl:
            "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
            "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?auto=format&fit=crop&w=2832&q=80",
            "https://images.unsplash.com/photo-1559656914-a30970c1affd?auto=format&fit=crop&w=700&q=60"
        ],
        rating: 3.72,
    },
    {
        category: "蛋糕",
        content: "尺寸：6寸",
        description:
            "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
        id: "-McJ-VvcwfN1_Ye_NtVA",
        is_enabled: 16,
        origin_price: 1000,
        price: 900,
        title: "蜂蜜檸檬蛋糕",
        unit: "個",
        num: 1,
        imageUrl:
            "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&w=1001&q=80",
        imagesUrl: [
            "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?auto=format&fit=crop&w=987&q=80"
        ],
        rating: 4.89,
    },
    {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
        id: "-McJ-VyqaFlLzUMmpPpm",
        is_enabled: 1,
        origin_price: 700,
        price: 600,
        title: "暗黑千層",
        unit: "個",
        num: 15,
        imageUrl:
            "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
            "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?auto=format&fit=crop&w=700&q=60",
            "https://images.unsplash.com/photo-1540337706094-da10342c93d8?auto=format&fit=crop&w=700&q=60"
        ],
        rating: 2.13,
    }
];

createApp({
    data: function () {
        return {
            products: [...products],
            currentItem: {},
            timer: null,
        };
    },
    methods: {
        getItem(item) {
            this.currentItem = Object.assign({}, {
                ...item,
                slider: [item.imageUrl, ...item.imagesUrl],
            });
            this.runSlider(this.currentItem.slider);
        },
        runSlider(imgArr) {
            clearInterval(this.timer);
            let counter = 0;
            const length = this.currentItem.slider.length;
            this.timer = setInterval(() => {
                counter++;
                this.currentItem.imageUrl = this.currentItem.slider[counter % length];
            }, 2000);
        },
    },
    mounted: function () { }
}).mount("#app");


