// 表示されている画像の数値合計を取得
const imageContainer = document.getElementById('imageContainer');
const imageCountDisplay = document.getElementById('imageCount');
const percentageDisplay = document.getElementById('percentage');
const images = imageContainer.querySelectorAll('img');
let totalCount = 0;

// メーター要素とプログレスバー
const meter = document.getElementById('meter');
const progress = document.getElementById('progress');

// 画像をクリックしたときの処理
images.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('selected'); // 選択状態をトグル

        const count = parseFloat(image.getAttribute('data-count'));
        if (!isNaN(count)) {
            if (image.classList.contains('selected')) {
                totalCount += count; // 選択時に合計に加える
            } else {
                totalCount -= count; // 選択解除時に合計から減算
            }
            imageCountDisplay.textContent = totalCount; // 小数点以下1桁まで表示する場合 .toFixed(1);

            // 画像要素を取得
            const images = document.querySelectorAll('#imageContainer img');
            let totalDataCount = 0;

            // 各画像のdata-countを取得して合計に加える
            images.forEach(image => {
                const count = parseFloat(image.getAttribute('data-count'));
                if (!isNaN(count)) {
                    totalDataCount += count;
                }
            });

            // メーターのプログレスバーとパーセンテージ表示を更新
            const max = 100; // 最大値を100%とする
            const percentage = (totalCount / totalDataCount) * 100; //割合の計算
            progress.style.width = percentage + '%';
            percentageDisplay.textContent = percentage.toFixed(1) + '%';

            /* 80%以上の場合、背景色を変更
            if (percentage < 70) {
                progress.style.backgroundColor = 'red';
            } else {
                progress.style.backgroundColor = 'green';
            }*/

            // 500L以上の場合、背景色を変更
            if (totalCount < 500) {
                progress.style.backgroundColor = 'red';
            } else {
                progress.style.backgroundColor = 'green';
            }            
        }
    });
});