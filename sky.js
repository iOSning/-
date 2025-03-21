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
const xz = document.getElementById('xz');
const dp = document.getElementById('dp');
const bs = document.getElementById('bs');
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
    { text: '萌新', action: () => alert('h') },
    { text: '锦鲤', action: () => alert('h') },
    { text: '短发', action: () => alert('h') },
    { text: '萌新马尾', action: () => alert('h') },
    { text: '超短刘海', action: () => alert('h') },
   { text: '一撮毛', action: () => alert('h') },
   { text: '鸡冠头', action: () => alert('h') },
   { text: '双低马尾', action: () => alert('h') },
   { text: '披肩长发', action: () => alert('h') },
   { text: '小啾啾', action: () => alert('h') },
   { text: '学生头', action: () => alert('h') },
   { text: '中长刘海', action: () => alert('h') },
   { text: '双麻发型', action: () => alert('h') },
   { text: '微翘短发', action: () => alert('h') },
   { text: '丸子头', action: () => alert('h') },
   { text: '半截龙骨', action: () => alert('h') },
   { text: '单片刘海', action: () => alert('h') },
    { text: '脏辫发型', action: () => alert('h') },
    { text: '寸头', action: () => alert('h') },
    { text: '女生长发', action: () => alert('h') },
   { text: '大胡子', action: () => alert('h') },
    { text: '印第安单辫', action: () => alert('h') },
    { text: '双球丸子头', action: () => alert('h') },
   { text: '冲天辫', action: () => alert('h') },
    { text: '偏分长发', action: () => alert('h') },
   { text: '羊角辫', action: () => alert('h') },
   { text: '狮子头', action: () => alert('h') },
   { text: '海草头', action: () => alert('h') },
   { text: '爆炸头', action: () => alert('h') },
    { text: '晨岛胡子', action: () => alert('h') },
    { text: '小飞象发型', action: () => alert('h') },
    { text: '卡卡西发型', action: () => alert('h') },
    { text: '指甲盖发型', action: () => alert('h') },
   { text: '南瓜头', action: () => alert('h') },
   { text: '圣诞帽', action: () => alert('h') },
    { text: '多彩绒帽', action: () => alert('h') },
    { text: '蜘蛛朋克头', action: () => alert('h') },
    { text: '女巫发型', action: () => alert('h') },
    { text: '宴会绒帽', action: () => alert('h') },
		{ text: '关闭', action: () => closeModal() },
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
xz.addEventListener('click', () => {
    const buttons = [
        { text: '藤枝平底鞋', bold: true, action: () => alert('h') },
        { text: '人字拖', action: () => alert('h') },
        { text: '兔兔鞋', action: () => alert('h') },
        { text: '黄色拖鞋', action: () => alert('h') },
				{ text: '小白鞋', action: () => alert('h') },
        { text: '关闭', action: () => closeModal() }
    ]; 
openDialogAndAddButtons(buttons, '选择鞋子');
});
dp.addEventListener('click', () => {
    const buttons = [
    { text: '隐形', bold: true, action: () => alert('h') },
    { text: '初始', action: () => alert('h') },
    { text: 'TGC白底', action: () => alert('h') },
   { text: 'TGC蓝', action: () => alert('h') },
    { text: '枫叶', action: () => alert('h') },
    { text: '蝙蝠', action: () => alert('h') },
    { text: '蜘蛛', action: () => alert('h') },
    { text: '圣诞', action: () => alert('h') },
    { text: '雪花', action: () => alert('h') },
   { text: '春之日', action: () => alert('h') },
    { text: '樱花', action: () => alert('h') },
    { text: '海洋', action: () => alert('h') },
    { text: '彩虹', action: () => alert('h') },
    { text: '枯叶', action: () => alert('h') },
    { text: '雪花', action: () => alert('h') },
   { text: '紫藤花', action: () => alert('h') },
    { text: '海龟', action: () => alert('h') },
    { text: '鲤跃', action: () => alert('h') },
    { text: '蔚紫', action: () => alert('h') },
    { text: '白鸟', action: () => alert('h') },
    { text: '白绒', action: () => alert('h') },
    { text: '红绒', action: () => alert('h') },
    { text: '花瓣', action: () => alert('h') },
    { text: '灯泡（暗）', action: () => alert('h') },
    { text: '灯泡（亮）', action: () => alert('h') },
    { text: '红金', action: () => alert('h') },
    { text: '墨绿', action: () => alert('h') },
    { text: '白金', action: () => alert('h') },
    { text: '紫金', action: () => alert('h') },
    { text: '坠边', action: () => alert('h') },
    { text: '华丽', action: () => alert('h') },
    { text: '荒原', action: () => alert('h') },
    { text: '蝴蝶', action: () => alert('h') },
    { text: '鲲瑶', action: () => alert('h') },
   { text: '粉贝壳', action: () => alert('h') },
   { text: '沙滩花', action: () => alert('h') },
   { text: '紫绒毛', action: () => alert('h') },
    { text: '深蓝白尾', action: () => alert('h') },
   { text: '紫伞纹', action: () => alert('h') },
   { text: '山纹红', action: () => alert('h') },
    { text: '汉服', action: () => alert('h') },
    { text: '贵族红绒', action: () => alert('h') },
    { text: '凤凰', action: () => alert('h') },
    { text: '连帽', action: () => alert('h') },
   { text: '绿花瓣', action: () => alert('h') },
   { text: '毛绒黑', action: () => alert('h') },
   { text: '破洞黑', action: () => alert('h') },
   { text: '制服黑', action: () => alert('h') },
   { text: '褶皱黑', action: () => alert('h') },
    { text: '围巾', action: () => alert('h') },
    { text: '星球夹克', action: () => alert('h') },
   { text: '浅蓝鸟', action: () => alert('h') },
   { text: '蓝黄鹰', action: () => alert('h') },
    { text: '棕色皮袄', action: () => alert('h') },
    { text: '鱼鳞', action: () => alert('h') },
    { text: '流浪', action: () => alert('h') },
    { text: '水军', action: () => alert('h') },
    { text: '维京', action: () => alert('h') },
    { text: '绊爱', action: () => alert('h') },
    { text: '粽子', action: () => alert('h') },
    { text: '燕尾', action: () => alert('h') },
    { text: '双色系带', action: () => alert('h') },
    { text: '单边围巾', action: () => alert('h') },
    { text: '关闭', action: () => closeModal() }
];
openDialogAndAddButtons(buttons, '选择斗篷');
});
bs.addEventListener('click', () => {
    const buttons = [
        { text: '未穿戴', action: () => alert('h') },
        { text: '小提琴', action: () => alert('h') },
        { text: '烟花棒', action: () => alert('h') },
        { text: '追光季大伞', action: () => alert('h') },
        { text: '篝火', action: () => alert('h') },
        { text: '透明伞', action: () => alert('h') },
        { text: '竖琴', action: () => alert('h') },
        { text: '小鼓', action: () => alert('h') },
        { text: '圆琴', action: () => alert('h') },
        { text: '号角', action: () => alert('h') },
        { text: '钢琴', action: () => alert('h') },
        { text: '雨伞', action: () => alert('h') },
        { text: '椅子', action: () => alert('h') },
        { text: '圣诞椅子', action: () => alert('h') },
        { text: '女巫茶桌', action: () => alert('h') },
        { text: '冥龙南瓜', action: () => alert('h') },
        { text: '小风车', action: () => alert('h') },
        { text: '落地伞', action: () => alert('h') },
        { text: '领冬季旗子', action: () => alert('h') },
        { text: '空中的灯', action: () => alert('h') },
        { text: '小彩旗', action: () => alert('h') },
        { text: '双人沙滩椅', action: () => alert('h') },
        { text: '沙滩躺椅', action: () => alert('h') },
        { text: '火球', action: () => alert('h') },
        { text: '秋千', action: () => alert('h') },
        { text: '跷跷板', action: () => alert('h') },
        { text: '灯笼', action: () => alert('h') },
        { text: '茶座', action: () => alert('h') },
        { text: '陶笛', action: () => alert('h') },
        { text: '夏日阳伞', action: () => alert('h') },
        { text: '双色坐垫', action: () => alert('h') },
        { text: '雪花水晶球', action: () => alert('h') },
        { text: '情人小船', action: () => alert('h') },
        { text: '小铃铛', action: () => alert('h') },
        { text: '手敲钟', action: () => alert('h') },
        { text: '长笛', action: () => alert('h') },
        { text: '排萧', action: () => alert('h') },
        { text: '红色吉他', action: () => alert('h') },
        { text: '尤克里里', action: () => alert('h') },
        { text: '高音钢琴', action: () => alert('h') },
        { text: '木琴', action: () => alert('h') },
        { text: '火盆', action: () => alert('h') },
        { text: '圆石火盆', action: () => alert('h') },
        { text: '琵琶乐器', action: () => alert('h') },
        { text: '胜利号角', action: () => alert('h') },
        { text: '木书架', action: () => alert('h') },
        { text: '吊床', action: () => alert('h') },
        { text: '火炉', action: () => alert('h') },
        { text: '毕业手碟', action: () => alert('h') },
        { text: '篝毕业大鼓', action: () => alert('h') },
        { text: '陶罐', action: () => alert('h') },
        { text: '软垫', action: () => alert('h') },
        { text: '火炬', action: () => alert('h') },
        { text: '遮雨棚', action: () => alert('h') },
        { text: '悬浮吊灯', action: () => alert('h') },
        { text: '六边木框', action: () => alert('h') },
        { text: '星星灯', action: () => alert('h') },
        { text: '玫瑰花', action: () => alert('h') },
        { text: '小狐狸', action: () => alert('h') },
        { text: '小憩茶桌', action: () => alert('h') },
        { text: '卡林巴琴', action: () => alert('h') },
        { text: '墓土水管', action: () => alert('h') },
        { text: '音韵吉他', action: () => alert('h') },
        { text: '凯旋手碟', action: () => alert('h') },
        { text: '雏鸟之琴', action: () => alert('h') },
        { text: '电吉他', action: () => alert('h') },
        { text: '派对气球', action: () => alert('h') },
        { text: '派对围栏灯', action: () => alert('h') },
        { text: '派对礼炮', action: () => alert('h') },
        { text: '典雅花瓶', action: () => alert('h') },
        { text: '贝斯', action: () => alert('h') },
        { text: '欧若拉星星', action: () => alert('h') },
        { text: '吉他琴', action: () => alert('h') },
        { text: '打鼓', action: () => alert('h') },
        { text: '敲锣', action: () => alert('h') },
        { text: '星星烟花棒', action: () => alert('h') },
        { text: '爱心烟花棒', action: () => alert('h') },
        { text: '滑板', action: () => alert('h') },
        { text: '飞扫把', action: () => alert('h') },
        { text: '扇子', action: () => alert('h') },
        { text: '关闭', action: () => closeModal() }
    ];
 openDialogAndAddButtons(buttons, '选择背饰');
});