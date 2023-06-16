<template>
    <div class="preloading">
        <p style="font-family: Plaguard-ZVnjx; font-size: 70px; top:30%; position: absolute; color: aliceblue;"> KHMER 90s Car Racing</p>
        <div class="box">
            <div class="circle" :data-dots="dots" :data-percent="marked" :style="{ '--bgColor': bgColor }">
                <div v-for="(point, index) in points" :key="index" class="points"
                    :style="{ '--i': index, '--rot': rotate + 'deg' }"></div>
            </div>
            <div class="text">
                <p style="font-size: 20px; color: #ff0070;">{{ marked }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dots: 100,
            marked: "LOADING...",
            bgColor: '#ff0070',
            points: [],
            rotate: 0,
        };
    },
    mounted() {
        this.calculatePoints();
    },
    methods: {
        calculatePoints() {
            const percent = Math.floor((this.dots * 100) / 100);
            this.rotate = 360 / this.dots;
            this.points = Array.from({ length: this.dots }, (_, i) => i);
            this.$nextTick(() => {
                const pointsMarked = this.$el.querySelectorAll('.points');
                for (var i = 0; i < percent; i++) {
                    pointsMarked[i].classList.add('marked');
                }
            });
            
        },
    },
};
</script>

<style scoped>
.preloading {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.box .text h2 {
    font-size: 38px;
    font-weight: 400;
    letter-spacing: 1px;
}
.box .text small {
    font-size: 18px;
    display: block;
}

.circle {
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.75);
}

.circle .points {
    width: 5px;
    height: 15px;
    background: #0007;
    position: absolute;
    border-radius: 3px;
    transform: rotate(calc(var(--i)*var(--rot))) translateY(-100px);

}

.points.marked {
    animation: glow 0.04s linear forwards;
    animation-delay: calc(var(--i)*0.05s);
}

@keyframes glow {
    0% {
        background: #0007;
        box-shadow: none;
    }

    100% {
        background: var(--bgColor);
        box-shadow: 0 0 10px var(--bgColor);
    }
}
</style>
  