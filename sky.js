<script>
const dialogBackdrop = document.getElementById('dialogBackdrop');
const myDialog = document.getElementById('myDialog');
const dialogButtonsContainer = document.getElementById('dialogButtonsContainer');
function openDialogAndAddButtons(buttonList,   dialogTitle) {
    dialogBackdrop.style.display = 'block';
    myDialog.style.display = 'block';
    dialogButtonsContainer.innerHTML = '';
    const dialogTitleElement = myDialog.querySelector('.dialog-title');
    dialogTitleElement.textContent = dialogTitle;
    buttonList.forEach(buttonData => {
        const button = document.createElement('div');
        button.classList.add('dialog-button');
        button.textContent = buttonData.text;
        if (buttonData.bold) {
            button.classList.add('bold');
        }
        if (buttonData.destructive) {
         button.classList.add('destructive');
        }
        button.addEventListener('click', () => {
            buttonData.action();
            if (buttonData.text === '关闭') {
                closeModal();
            }
        });
 dialogButtonsContainer.appendChild(button);
    });
}
function closeModal() {
    dialogBackdrop.style.display = 'none';
    myDialog.style.display = 'none';
}
const fx = document.getElementById('fx');
const mj = document.getElementById('mj');
fx.addEventListener('click', () => {
    const buttons = [
        { text: '白鸟', bold: true, action: () => alert('h') },
        { text: '巫师', action: () => alert('h') },
        { text: '林克', action: () => alert('h') },
        { text: '正太', action: () => alert('h') },
        { text: '樱花', action: () => alert('h') },
        { text: '猫猫', action: () => alert('h') },
        { text: '龙骨', action: () => alert('h') },
        { text: '雨妈', action: () => alert('h') },
        { text: '卡卡', action: () => alert('h') },
        { text: '马尾', action: () => alert('h') },
        { text: '平菇', action: () => alert('h') },
        { text: '关闭', action: () => closeModal() }
    ];
 openDialogAndAddButtons(buttons, '选择发型');
});
mj.addEventListener('click', () => {
    const buttons = [
        { text: '黑人面具', bold: true, action: () => alert('h') },
        { text: '矮人面具', action: () => alert('h') },
        { text: '阿努比斯', action: () => alert('h') },
        { text: '狐狸面具', action: () => alert('h') },
				{ text: '羚羊面具', action: () => alert('h') },
				{ text: '牛头面具', action: () => alert('h') },
				{ text: '黄鼠狼面具', action: () => alert('h') },
        { text: '关闭', action: () => closeModal() }
    ]; 
openDialogAndAddButtons(buttons, '选择面具');
});
</script>

