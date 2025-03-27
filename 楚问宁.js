function addrjump(addr) {
return Number(h5gg.getValue(addr, "I64"));
}
var so = Number(h5gg.getRangesList(0)[0].start);
hx = addrjump(so + 0x3C81C00);
bs = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3E4;
fx = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3CC;
kz = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3C4;
dp = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3C8;
mj = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3D0;
ez = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3DC;
bs = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3E4;
ts = addrjump(addrjump(hx + 0x310) + 0xB0) + 0x3E8;
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
const kz = document.getElementById('kz');
const ez = document.getElementById('ez');
const ts  =document.getElementById('ts');
const qt = document.getElementById('qt');
fx.addEventListener('click', () => {
    const buttons = [
    { text: '白鸟', action: function () {
            h5gg.setValue(faxing, 298050356, 'I32');
        }
    },
    { text: '巫师', action: function () {
            h5gg.setValue(faxing, -1485660690, 'I32');
        }
    },
    { text: '林克', action: function () {
            h5gg.setValue(faxing, 1794435961, 'I32');
        }
    },
    { text: '正太', action: function () {
            h5gg.setValue(faxing, 185578776, 'I32');
        }
    },
    { text: '樱花', action: function () {
            h5gg.setValue(faxing, -1557759559, 'I32');
        }
    },
    { text: '猫猫', action: function () {
            h5gg.setValue(faxing, -1800557752, 'I32');
        }
    },
    { text: '龙骨', action: function () {
            h5gg.setValue(faxing, -1613597547, 'I32');
        }
    },
    { text: '雨妈', action: function () {
            h5gg.setValue(faxing, 1078517906, 'I32');
        }
    },
    { text: '卡卡', action: function () {
            h5gg.setValue(faxing, 777821397, 'I32');
        }
    },
    { text: '双马尾', action: function () {
            h5gg.setValue(faxing, 124583663, 'I32');
        }
    },
    { text: '平菇', action: function () {
            h5gg.setValue(faxing, -913561859, 'I32');
        }
    },
    { text: '萌新', action: function () {
            h5gg.setValue(faxing, 158418233, 'I32');
        }
    },
    { text: '锦鲤', action: function () {
            h5gg.setValue(faxing, -1721234764, 'I32');
        }
    },
    { text: '短发', action: function () {
            h5gg.setValue(faxing, 310226317, 'I32');
        }
    },
    { text: '萌新马尾', action: function () {
            h5gg.setValue(faxing, -1510505511, 'I32');
        }
    },
    { text: '超短刘海', action: function () {
            h5gg.setValue(faxing, 589320403, 'I32');
        }
    },
    { text: '一撮毛', action: function () {
            h5gg.setValue(faxing, 1091766677, 'I32');
        }
    },
    { text: '鸡冠头', action: function () {
            h5gg.setValue(faxing, 1779588853, 'I32');
        }
    },
    { text: '双低马尾', action: function () {
            h5gg.setValue(faxing, -1492518440, 'I32');
        }
    },
    { text: '披肩长发', action: function () {
            h5gg.setValue(faxing, 1151632134, 'I32');
        }
    },
    { text: '小啾啾', action: function () {
            h5gg.setValue(faxing, 189805609, 'I32');
        }
    },
    { text: '学生头', action: function () {
            h5gg.setValue(faxing, -626389869, 'I32');
        }
    },
    { text: '中长刘海', action: function () {
            h5gg.setValue(faxing, 1092648973, 'I32');
        }
    },
    { text: '双麻发型', action: function () {
            h5gg.setValue(faxing, 1415190429, 'I32');
        }
    },
    { text: '微翘短发', action: function () {
            h5gg.setValue(faxing, 310226317, 'I32');
        }
    },
    { text: '丸子头', action: function () {
            h5gg.setValue(faxing, 351601302, 'I32');
        }
    },
    { text: '半截龙骨', action: function () {
            h5gg.setValue(faxing, 1966947567, 'I32');
        }
    },
    { text: '单片刘海', action: function () {
            h5gg.setValue(faxing, 1075871354, 'I32');
        }
    },
    { text: '脏辫发型', action: function () {
            h5gg.setValue(faxing, -1712135015, 'I32');
        }
    },
    { text: '寸头', action: function () {
            h5gg.setValue(faxing, 1472657881, 'I32');
        }
    },
    { text: '女生长发', action: function () {
            h5gg.setValue(faxing, 1747536341, 'I32');
        }
    },
    { text: '大胡子', action: function () {
            h5gg.setValue(faxing, -239454226, 'I32');
        }
    },
    { text: '印第安单辫', action: function () {
            h5gg.setValue(faxing, 766797080, 'I32');
        }
    },
    { text: '双球丸子头', action: function () {
            h5gg.setValue(faxing, 1960678833, 'I32');
        }
    },
    { text: '冲天辫', action: function () {
            h5gg.setValue(faxing, -1219935991, 'I32');
        }
    },
    { text: '偏分长发', action: function () {
            h5gg.setValue(faxing, 21382025, 'I32');
        }
    },
    { text: '羊角辫', action: function () {
            h5gg.setValue(faxing, 392918653, 'I32');
        }
    },
    { text: '狮子头', action: function () {
            h5gg.setValue(faxing, 651777506, 'I32');
        }
    },
    { text: '海草头', action: function () {
            h5gg.setValue(faxing, -857360841, 'I32');
        }
    },
    { text: '爆炸头', action: function () {
            h5gg.setValue(faxing, -1628326584, 'I32');
        }
    },
    { text: '晨岛胡子', action: function () {
            h5gg.setValue(faxing, 416680174, 'I32');
        }
    },
    { text: '小飞象发型', action: function () {
            h5gg.setValue(faxing, -1862365002, 'I32');
        }
    },
    { text: '卡卡西发型', action: function () {
            h5gg.setValue(faxing, 777821397, 'I32');
        }
    },
    { text: '指甲盖发型', action: function () {
            h5gg.setValue(faxing, -573731038, 'I32');
        }
    },
    { text: '南瓜头', action: function () {
            h5gg.setValue(faxing, -1368655909, 'I32');
        }
    },
    { text: '圣诞帽', action: function () {
            h5gg.setValue(faxing, 1941159163, 'I32');
        }
    },
    { text: '多彩绒帽', action: function () {
            h5gg.setValue(faxing, 1969205567, 'I32');
        }
    },
    { text: '蜘蛛朋克头', action: function () {
            h5gg.setValue(faxing, 512277997, 'I32');
        }
    },
    { text: '女巫发型', action: function () {
            h5gg.setValue(faxing, 1967941939, 'I32');
        }
    },
    { text: '宴会绒帽', action: function () {
            h5gg.setValue(faxing, 1854693120, 'I32');
        }
    },
    { text: '关闭', action: function () {
            closeModal();
        }
    }
		];
openDialogAndAddButtons(buttons, '选择发型');
});
mj.addEventListener('click', () => {
    const buttons = [
    { text: '黑脸', action: function () {
            h5gg.setValue(mianju, -27210618, 'I32');
        }
    },
    { text: '阿努比斯', action: function () {
            h5gg.setValue(mianju, 1975317361, 'I32');
        }
    },
    { text: '狐狸面具', action: function () {
            h5gg.setValue(mianju, -66347698, 'I32');
        }
    },
    { text: '羚羊面具', action: function () {
            h5gg.setValue(mianju, 1044037391, 'I32');
        }
    },
    { text: '牛头面具', action: function () {
            h5gg.setValue(mianju, -1759824464, 'I32');
        }
    },
    { text: '黄鼠狼面具', action: function () {
            h5gg.setValue(mianju, -1187124188, 'I32');
        }
    },
    { text: '螃蟹面具', action: function () {
            h5gg.setValue(mianju, -1568348035, 'I32');
        }
    },
    { text: '金翅鸟面', action: function () {
            h5gg.setValue(mianju, -739801178, 'I32');
        }
    },
    { text: '涂鸦面具', action: function () {
            h5gg.setValue(mianju, 1968067367, 'I32');
        }
    },
    { text: '条纹白面具', action: function () {
            h5gg.setValue(mianju, 1984844986, 'I32');
        }
    },
    { text: '泪痣白面具', action: function () {
            h5gg.setValue(mianju, 2001622605, 'I32');
        }
    },
    { text: '三角面具', action: function () {
            h5gg.setValue(mianju, 1884179272, 'I32');
        }
    },
    { text: '侠者面具', action: function () {
            h5gg.setValue(mianju, 1900956891, 'I32');
        }
    },
    { text: '倒三角面具', action: function () {
            h5gg.setValue(mianju, 1917734510, 'I32');
        }
    },
    { text: '痛苦面具', action: function () {
            h5gg.setValue(mianju, 1934512129, 'I32');
        }
    },
    { text: '关闭', action: function () {
            closeModal();
        }
    }
];
openDialogAndAddButtons(buttons, '选择面具');
});
xz.addEventListener('click', () => {
    const buttons = [
    { text: '藤枝平底鞋', action: function() {
        h5gg.setValue(xiezi, 136350340, 'I32');
        } 
    },
    { text: '人字拖', action: function() {
        h5gg.setValue(xiezi, 1905437419, 'I32');
        } 
    },
    { text: '兔兔拖', action: function() {
       h5gg.setValue(xiezi, -1045253330, 'I32');
        } 
    },
    { text: '黄色拖鞋', action: function() {
       h5gg.setValue(xiezi, 1616682074, 'I32');
        } 
    },
    { text: '小白鞋', action: function() {
        h5gg.setValue(xiezi, 423244060, 'I32');
        } 
    },
    { text: '关闭', action: function() {
            closeModal();
        } 
    }
];
openDialogAndAddButtons(buttons, '选择鞋子');
});
dp.addEventListener('click', () => {
const buttons = [
    { text: '无翼', action: function() {
            h5gg.setValue(doupeng, 0, 'I32');
        } 
    },
    { text: '隐形', bold: true, action: function() {
            h5gg.setValue(doupeng, 1324678683, 'I32');
        } 
    },
    { text: '初始', action: function() {
            h5gg.setValue(doupeng, -2049687945, 'I32');
        } 
    },
    { text: 'TGC白底', action: function() {
            h5gg.setValue(doupeng, -90577376, 'I32');
        } 
    },
    { text: 'TGC蓝', action: function() {
            h5gg.setValue(doupeng, -2075846580, 'I32');
        } 
    },
    { text: '枫叶', action: function() {
            h5gg.setValue(doupeng, -965319148, 'I32');
        } 
    },
    { text: '蝙蝠', action: function() {
            h5gg.setValue(doupeng, -1798751000, 'I32');
        } 
    },
    { text: '蜘蛛', action: function() {
            h5gg.setValue(doupeng, 832452232, 'I32');
        } 
    },
    { text: '圣诞', action: function() {
            h5gg.setValue(doupeng, 1433045050, 'I32');
        } 
    },
    { text: '雪花', action: function() {
            h5gg.setValue(doupeng, -1943851225, 'I32');
        } 
    },
    { text: '春之日', action: function() {
            h5gg.setValue(doupeng, -874827394, 'I32');
        } 
    },
    { text: '樱花', action: function() {
            h5gg.setValue(doupeng, 511060416, 'I32');
        } 
    },
    { text: '海洋', action: function() {
            h5gg.setValue(doupeng, -1360815251, 'I32');
        } 
    },
    { text: '彩虹', action: function() {
            h5gg.setValue(doupeng, 1462163205, 'I32');
        } 
    },
    { text: '枯叶', action: function() {
            h5gg.setValue(doupeng, -990430825, 'I32');
        } 
    },
    { text: '雪花', action: function() {
            h5gg.setValue(doupeng, -1321339662, 'I32');
        } 
    },
    { text: '紫藤花', action: function() {
            h5gg.setValue(doupeng, 774729659, 'I32');
        } 
    },
    { text: '海龟', action: function() {
            h5gg.setValue(doupeng, -2674256, 'I32');
        } 
    },
    { text: '鲤跃', action: function() {
            h5gg.setValue(doupeng, 389333831, 'I32');
        } 
    },
    { text: '蔚紫', action: function() {
            h5gg.setValue(doupeng, 844189904, 'I32');
        } 
    },
    { text: '白鸟', action: function() {
            h5gg.setValue(doupeng, 803430286, 'I32');
        } 
    },
    { text: '白绒', action: function() {
            h5gg.setValue(doupeng, 1205733815, 'I32');
        } 
    },
    { text: '红绒', action: function() {
            h5gg.setValue(doupeng, -1164672898, 'I32');
        } 
    },
    { text: '花瓣', action: function() {
            h5gg.setValue(doupeng, 1516488095, 'I32');
        } 
    },
    { text: '灯泡（暗）', action: function() {
            h5gg.setValue(doupeng, -1528106587, 'I32');
        } 
    },
    { text: '灯泡（亮）', action: function() {
            h5gg.setValue(doupeng, -1578439444, 'I32');
        } 
    },
    { text: '红金', action: function() {
            h5gg.setValue(doupeng, -554578728, 'I32');
        } 
    },
    { text: '墨绿', action: function() {
            h5gg.setValue(doupeng, -2113359206, 'I32');
        } 
    },
    { text: '白金', action: function() {
            h5gg.setValue(doupeng, 1740444614, 'I32');
        } 
    },
    { text: '紫金', action: function() {
            h5gg.setValue(doupeng, 705761080, 'I32');
        } 
    },
    { text: '坠边', action: function() {
            h5gg.setValue(doupeng, -1821545403, 'I32');
        } 
    },
    { text: '华丽', action: function() {
            h5gg.setValue(doupeng, -342692052, 'I32');
        } 
    },
    { text: '荒原', action: function() {
            h5gg.setValue(doupeng, -292359195, 'I32');
        } 
    },
    { text: '蝴蝶', action: function() {
            h5gg.setValue(doupeng, 2091421626, 'I32');
        } 
    },
    { text: '鲲瑶', action: function() {
            h5gg.setValue(doupeng, 1632614382, 'I32');
        } 
    },
    { text: '粉贝壳', action: function() {
            h5gg.setValue(doupeng, -2064347239, 'I32');
        } 
    },
    { text: '沙滩花', action: function() {
            h5gg.setValue(doupeng, 798847432, 'I32');
        } 
    },
    { text: '紫绒毛', action: function() {
            h5gg.setValue(doupeng, -1774416765, 'I32');
        } 
    },
    { text: '深蓝白尾', action: function() {
            h5gg.setValue(doupeng, -120474176, 'I32');
        } 
    },
    { text: '紫伞纹', action: function() {
            h5gg.setValue(doupeng, 839472537, 'I32');
        } 
    },
    { text: '山纹红', action: function() {
            h5gg.setValue(doupeng, -733531549, 'I32');
        } 
    },
    { text: '汉服', action: function() {
            h5gg.setValue(doupeng, 122710957, 'I32');
        } 
    },
    { text: '贵族红绒', action: function() {
            h5gg.setValue(doupeng, -1268890918, 'I32');
        } 
    },
    { text: '凤凰', action: function() {
            h5gg.setValue(doupeng, 441553228, 'I32');
        } 
    },
    { text: '连帽', action: function() {
            h5gg.setValue(doupeng, 748003864, 'I32');
        } 
    },
    { text: '绿花瓣', action: function() {
            h5gg.setValue(doupeng, -598819177, 'I32');
        } 
    },
    { text: '毛绒黑', action: function() {
            h5gg.setValue(doupeng, -1637257688, 'I32');
        } 
    },
    { text: '破洞黑', action: function() {
            h5gg.setValue(doupeng, 1685782319, 'I32');
        } 
    },
    { text: '制服黑', action: function() {
            h5gg.setValue(doupeng, -1079163088, 'I32');
        } 
    },
    { text: '褶皱黑', action: function() {
            h5gg.setValue(doupeng, -556439716, 'I32');
        } 
    },
    { text: '围巾', action: function() {
            h5gg.setValue(doupeng, 2096903675, 'I32');
        } 
    },
    { text: '星球夹克', action: function() {
            h5gg.setValue(doupeng, 1973407668, 'I32');
        } 
    },
    { text: '浅蓝鸟', action: function() {
            h5gg.setValue(doupeng, -162552802, 'I32');
        } 
    },
    { text: '蓝黄鹰', action: function() {
            h5gg.setValue(doupeng, -943604577, 'I32');
        } 
    },
    { text: '棕色皮袄', action: function() {
            h5gg.setValue(doupeng, 1783289476, 'I32');
        } 
    },
    { text: '鱼鳞', action: function() {
            h5gg.setValue(doupeng, 11666630, 'I32');
        } 
    },
    { text: '流浪', action: function() {
            h5gg.setValue(doupeng, 266898341, 'I32');
        } 
    },
    { text: '水军', action: function() {
            h5gg.setValue(doupeng, 465012383, 'I32');
        } 
    },
    { text: '维京', action: function() {
            h5gg.setValue(doupeng, 381927458, 'I32');
        } 
    },
    { text: '绊爱', action: function() {
            h5gg.setValue(doupeng, 1245852319, 'I32');
        } 
    },
    { text: '粽子', action: function() {
            h5gg.setValue(doupeng, -1659776754, 'I32');
        } 
    },
    { text: '燕尾', action: function() {
            h5gg.setValue(doupeng, -998976810, 'I32');
        } 
    },
    { text: '双色系带', action: function() {
            h5gg.setValue(doupeng, 1176158362, 'I32');
        } 
    },
    { text: '单边围巾', action: function() {
            h5gg.setValue(doupeng, 1502325329, 'I32');
        } 
    },
    { text: '关闭', action: function() {
            closeModal();
        } 
	}
];
openDialogAndAddButtons(buttons, '选择斗篷');
});
kz.addEventListener('click', () => {
   const buttons = [
    { text: '搓澡巾',
	     action: function () {
        h5gg.setValue(kuzhi, 570621080, 'I32');
        } 
    },
    { text: '灯笼裤', action: function () {
       h5gg.setValue(kuzhi, 2119378818, 'I32');
        } 
    },
    { text: '紧身裤', action: function () {
            h5gg.setValue(kuzhi, -1180077310, 'I32');
        } 
    },
    { text: '工装裤', action: function () {
            h5gg.setValue(kuzhi, 1394323104, 'I32');
        } 
    },
    { text: '连体裤', action: function () {
            h5gg.setValue(kuzhi, 1796000040, 'I32');
        } 
    },
    { text: '武士裤', action: function () {
            h5gg.setValue(kuzhi, 19011829, 'I32');
        } 
    },
    { text: '邮差裤子', action: function () {
            h5gg.setValue(kuzhi, -1537431460, 'I32');
        } 
    },
    { text: '雪人裤子', action: function () {
            h5gg.setValue(kuzhi, 2037585691, 'I32');
        } 
    },
    { text: '背带裤', action: function () {
            h5gg.setValue(kuzhi, -59378648, 'I32');
        } 
    },
    { text: '双子连体服', action: function () {
            h5gg.setValue(kuzhi, 1599550012, 'I32');
        } 
    },
    { text: '佩剑骑士服', action: function () {
            h5gg.setValue(kuzhi, -1965792662, 'I32');
        } 
    },
    { text: '小王子套装', action: function () {
            h5gg.setValue(kuzhi, -681350368, 'I32');
        } 
    },
    { text: '蓝黄羽袖', action: function () {
            h5gg.setValue(kuzhi, -1895396507, 'I32');
        } 
    },
    { text: '蓝调绒服', action: function () {
            h5gg.setValue(kuzhi, 785182973, 'I32');
        } 
    },
    { text: '匠人护裙', action: function () {
            h5gg.setValue(kuzhi, 1689650369, 'I32');
        } 
    },
    { text: '半袖袍子', action: function () {
            h5gg.setValue(kuzhi, -994628895, 'I32');
        } 
    },
    { text: '下水裤', action: function () {
            h5gg.setValue(kuzhi, 1996382026, 'I32');
        } 
    },
    { text: '系带短打', action: function () {
            h5gg.setValue(kuzhi, 1474644064, 'I32');
        } 
    },
    { text: '小丑睡衣', action: function () {
            h5gg.setValue(kuzhi, -2134660219, 'I32');
        } 
    },
    { text: '过膝长袍', action: function () {
            h5gg.setValue(kuzhi, -935804232, 'I32');
        } 
    },
    { text: '黄色菊花裙子', action: function () {
            h5gg.setValue(kuzhi, 1324678683, 'I32');
        } 
    },
    { text: '关闭', action: function () {
            closeModal();
        } 
    }
];
openDialogAndAddButtons(buttons, '选择裤子');
});
bs.addEventListener('click', () => {
    const buttons = [
    { text: '未穿戴', action: function() {
            h5gg.setValue(beishi, 2035109393, 'I32');
        } 
    },
    { text: '小提琴', action: function() {
            h5gg.setValue(beishi, -1648375736, 'I32');
        } 
    },
    { text: '烟花棒', action: function() {
            h5gg.setValue(beishi, -1014213802, 'I32');
        } 
    },
    { text: '追光季大伞', action: function() {
            h5gg.setValue(beishi, -660938830, 'I32');
        } 
    },
    { text: '篝火', action: function() {
            h5gg.setValue(beishi, -515741147, 'I32');
        } 
    },
    { text: '透明伞', action: function() {
   
       h5gg.setValue(beishi, -644161211, 'I32');
        } 
    },
    { text: '竖琴', action: function() {
            h5gg.setValue(beishi, -1623966850, 'I32');
        } 
    },
    { text: '小鼓', action: function() {
            h5gg.setValue(beishi, 2003040587, 'I32');
        } 
    },
    { text: '圆琴', action: function() {
            h5gg.setValue(beishi, 1064146256, 'I32');
        } 
    },
    { text: '号角', action: function() {
            h5gg.setValue(beishi, 1021011859, 'I32');
        } 
    },
    { text: '钢琴', action: function() {
            h5gg.setValue(beishi, 1889256860, 'I32');
        } 
    },
    { text: '雨伞', action: function() {
            h5gg.setValue(beishi, -1720872153, 'I32');
        } 
    },
    { text: '椅子', action: function() {
            h5gg.setValue(beishi, 992885953, 'I32');
        } 
    },
    { text: '圣诞椅子', action: function() {
            h5gg.setValue(beishi, -1444947170, 'I32');
        } 
    },
    { text: '女巫茶桌', action: function() {
            h5gg.setValue(beishi, 1279207725, 'I32');
        } 
    },
    { text: '冥龙南瓜', action: function() {
            h5gg.setValue(beishi, -1748283639, 'I32');
        } 
    },
    { text: '小风车', action: function() {
            h5gg.setValue(beishi, 57978849, 'I32');
        } 
    },
    { text: '落地伞', action: function() {
            h5gg.setValue(beishi, 946432484, 'I32');
        } 
    },
    { text: '领冬季旗子', action: function() {
            h5gg.setValue(beishi, 90660037, 'I32');
        } 
    },
    { text: '空中的灯', action: function() {
            h5gg.setValue(beishi, -522874430, 'I32');
        } 
    },
    { text: '小彩旗', action: function() {
            h5gg.setValue(beishi, -994414187, 'I32');
        } 
    },
    { text: '双人沙滩椅', action: function() {
            h5gg.setValue(beishi, -1352265746, 'I32');
        } 
    },
    { text: '沙滩躺椅', action: function() {
            h5gg.setValue(beishi, 1480625729, 'I32');
        } 
    },
    { text: '火球', action: function() {
            h5gg.setValue(beishi, -840083257, 'I32');
        } 
    },
    { text: '秋千', action: function() {
            h5gg.setValue(beishi, -714127353, 'I32');
        } 
    },
    { text: '跷跷板', action: function() {
            h5gg.setValue(beishi, -1030495085, 'I32');
        } 
    },
    { text: '灯笼', action: function() {
            h5gg.setValue(beishi, -1593950895, 'I32');
        } 
    },
    { text: '茶座', action: function() {
            h5gg.setValue(beishi, -980480887, 'I32');
        } 
    },
    { text: '陶笛', action: function() {
            h5gg.setValue(beishi, 1638144370, 'I32');
        } 
    },
    { text: '夏日阳伞', action: function() {
            h5gg.setValue(beishi, -2058340788, 'I32');
        } 
    },
    { text: '双色坐垫', action: function() {
            h5gg.setValue(beishi, -699266735, 'I32');
        } 
    },
    { text: '雪花水晶球', action: function() {
            h5gg.setValue(beishi, 1931354705, 'I32');
        } 
    },
    { text: '情人小船', action: function() {
            h5gg.setValue(beishi, -415397879, 'I32');
        } 
    },
    { text: '小铃铛', action: function() {
            h5gg.setValue(beishi, -48255603, 'I32');
        } 
    },
    { text: '手敲钟', action: function() {
            h5gg.setValue(beishi, -98588460, 'I32');
        } 
    },
    { text: '长笛', action: function() {
            h5gg.setValue(beishi, 396560731, 'I32');
        } 
    },
    { text: '排萧', action: function() {
            h5gg.setValue(beishi, 1237767078, 'I32');
        } 
    },
    { text: '红色吉他', action: function() {
            h5gg.setValue(beishi, -1025306492, 'I32');
        } 
    },
    { text: '尤克里里', action: function() {
            h5gg.setValue(beishi, -1942962475, 'I32');
        } 
    },
    { text: '高音钢琴', action: function() {
            h5gg.setValue(beishi, -1019169781, 'I32');
        } 
    },
    { text: '木琴', action: function() {
            h5gg.setValue(beishi, 399957901, 'I32');
        } 
    },
    { text: '火盆', action: function() {
            h5gg.setValue(beishi, 1793801900, 'I32');
        } 
    },
    { text: '圆石火盆', action: function() {
            h5gg.setValue(beishi, 660764419, 'I32');
        } 
    },
    { text: '琵琶乐器', action: function() {
            h5gg.setValue(beishi, -1382855507, 'I32');
        } 
    },
    { text: '胜利号角', action: function() {
            h5gg.setValue(beishi, -896102798, 'I32');
        } 
    },
    { text: '木书架', action: function() {
            h5gg.setValue(beishi, 1079120316, 'I32');
        } 
    },
    { text: '吊床', action: function() {
            h5gg.setValue(beishi, 1994487329, 'I32');
        } 
    },
    { text: '火炉', action: function() {
            h5gg.setValue(beishi, 313507026, 'I32');
        } 
    },
    { text: '毕业手碟', action: function() {
            h5gg.setValue(beishi, 900914909, 'I32');
        } 
    },
    { text: '篝毕业大鼓', action: function() {
            h5gg.setValue(beishi, -795086156, 'I32');
        } 
    },
    { text: '陶罐', action: function() {
            h5gg.setValue(beishi, 858492530, 'I32');
        } 
    },
    { text: '软垫', action: function() {
            h5gg.setValue(beishi, 1748930676, 'I32');
        } 
    },
    { text: '火炬', action: function() {
            h5gg.setValue(beishi, -1762117817, 'I32');
        } 
    },
    { text: '遮雨棚', action: function() {
            h5gg.setValue(beishi, -1513173800, 'I32');
        } 
    },
    { text: '悬浮吊灯', action: function() {
            h5gg.setValue(beishi, -2094712299, 'I32');
        } 
    },
    { text: '六边木框', action: function() {
            h5gg.setValue(beishi, 1661108877, 'I32');
        } 
    },
    { text: '星星灯', action: function() {
            h5gg.setValue(beishi, 638976622, 'I32');
        } 
    },
    { text: '玫瑰花', action: function() {
            h5gg.setValue(beishi, 351343999, 'I32');
        } 
    },
    { text: '小狐狸', action: function() {
            h5gg.setValue(beishi, -1723880395, 'I32');
        } 
    },
    { text: '小憩茶桌', action: function() {
            h5gg.setValue(beishi, -2142690653, 'I32');
        } 
    },
    { text: '卡林巴琴', action: function() {
            h5gg.setValue(beishi, -1637856458, 'I32');
        } 
    },
    { text: '墓土水管', action: function() {
            h5gg.setValue(beishi, 1192794220, 'I32');
        } 
    },
    { text: '音韵吉他', action: function() {
            h5gg.setValue(beishi, 445114499, 'I32');
        } 
    },
    { text: '凯旋手碟', action: function() {
            h5gg.setValue(beishi, -1080011984, 'I32');
        } 
    },
    { text: '雏鸟之琴', action: function() {
            h5gg.setValue(beishi, -120313455, 'I32');
        } 
    },
    { text: '电吉他', action: function() {
            h5gg.setValue(beishi, -827723344, 'I32');
        } 
    },
    { text: '派对气球', action: function() {
            h5gg.setValue(beishi, -1822686676, 'I32');
        } 
    },
    { text: '派对围栏灯', action: function() {
            h5gg.setValue(beishi, -1212665156, 'I32');
        } 
    },
    { text: '派对礼炮', action: function() {
            h5gg.setValue(beishi, -1584575268, 'I32');
        } 
    },
    { text: '典雅花瓶', action: function() {
            h5gg.setValue(beishi, 400728495, 'I32');
        } 
    },
    { text: '贝斯', action: function() {
            h5gg.setValue(beishi, -777390487, 'I32');
        } 
    },
    { text: '欧若拉星星', action: function() {
            h5gg.setValue(beishi, 2541154237, 'I32');
        } 
    },
    { text: '吉他琴', action: function() {
            h5gg.setValue(beishi, -1017983108, 'I32');
        } 
    },
    { text: '打鼓', action: function() {
            h5gg.setValue(beishi, -2130910356, 'I32');
        } 
    },
    { text: '敲锣', action: function() {
            h5gg.setValue(beishi, -481194326, 'I32');
        } 
    },
    { text: '星星烟花棒', action: function() {
            h5gg.setValue(beishi, -1651393771, 'I32');
        } 
    },
    { text: '爱心烟花棒', action: function() {
            h5gg.setValue(beishi, 1725054932, 'I32');
        } 
    },
    { text: '滑板', action: function() {
            h5gg.setValue(beishi, 1123438996, 'I32');
        } 
    },
    { text: '飞扫把', action: function() {
            h5gg.setValue(beishi, -127917652, 'I32');
        } 
    },
    { text: '扇子', action: function() {
            h5gg.setValue(beishi, 665447105, 'I32');
        } 
    },
    { text: '关闭', action: function() {
            closeModal();
        } 
    }
]; 
openDialogAndAddButtons(buttons, '选择背饰');
});
ez.addEventListener('click', () => {
    const buttons = [
     { text: '魔法季耳坠', action:function (){
		  h5gg.setValue(erzh, -408332940, 'I32');
	 }
 },
       { text: '彩虹耳坠', action:function(){
				h5gg.setValue(erzh, -13781285, 'I32');
        } 
			},
        { text: '关闭', action: () => closeModal() }
    ]; 
openDialogAndAddButtons(buttons, '选择耳坠');
});
ts.addEventListener('click', () => {
const buttons = [
    { text: '未穿戴', action: function () {
      h5gg.setValue(toushi, -614468067, 'I32');
        } 
    },
    { text: 'IOS专属耳机', action: function () {
            h5gg.setValue(toushi, 1139229702, 'I32');
        } 
    },
    { text: '红耳机', action: function () {
            h5gg.setValue(toushi, 343022577, 'I32');
        } 
    },
    { text: '雪人头饰', action: function () {
            h5gg.setValue(toushi, 2066928294, 'I32');
        } 
    },
    { text: '小鸟头饰', action: function () {
            h5gg.setValue(toushi, 1097951337, 'I32');
        } 
    },
    { text: '单边羽毛', action: function () {
            h5gg.setValue(toushi, 1100765809, 'I32');
        } 
    },
    { text: '双侧羽毛', action: function () {
            h5gg.setValue(toushi, -795522345, 'I32');
        } 
    },
    { text: '毕业羽毛', action: function () {
            h5gg.setValue(toushi, 460877065, 'I32');
        } 
    },
    { text: '松果帽子', action: function () {
            h5gg.setValue(toushi, -117023730, 'I32');
        } 
    },
    { text: '单边小辫', action: function () {
            h5gg.setValue(toushi, -2055318383, 'I32');
        } 
    },
    { text: '小白花', action: function () {
            h5gg.setValue(toushi, 1824849394, 'I32');
        } 
    },
    { text: '小红花', action: function () {
            h5gg.setValue(toushi, 1808071775, 'I32');
        } 
    },
    { text: '彩虹小花', action: function () {
            h5gg.setValue(toushi, -258406871, 'I32');
        } 
    },
    { text: '花环发饰', action: function () {
            h5gg.setValue(toushi, -1014213802, 'I32');
        } 
    },
    { text: '贝壳', action: function () {
            h5gg.setValue(toushi, 609163907, 'I32');
        } 
    },
    { text: '遮阳帽', action: function () {
            h5gg.setValue(toushi, -800265521, 'I32');
        } 
    },
    { text: '蜘蛛帽', action: function () {
            h5gg.setValue(toushi, 520528143, 'I32');
        } 
    },
    { text: '巫术犄角', action: function () {
            h5gg.setValue(toushi, -1320722275, 'I32');
        } 
    },
    { text: '1周年帽子', action: function () {
            h5gg.setValue(toushi, 299998503, 'I32');
        } 
    },
    { text: '二周年帽子', action: function () {
            h5gg.setValue(toushi, 316776122, 'I32');
        } 
    },
    { text: '音乐会发饰', action: function () {
            h5gg.setValue(toushi, -1005539188, 'I32');
        } 
    },
    { text: '圣诞鹿角', action: function () {
            h5gg.setValue(toushi, 465529931, 'I32');
        } 
    },
    { text: '雪花发夹', action: function () {
            h5gg.setValue(toushi, -1164103139, 'I32');
        } 
    },
    { text: '小橘子', action: function () {
            h5gg.setValue(toushi, -1442762303, 'I32');
        } 
    },
    { text: '小兔子', action: function () {
            h5gg.setValue(toushi, -820659239, 'I32');
        } 
    },
    { text: '年年有鱼', action: function () {
            h5gg.setValue(toushi, 2103066149, 'I32');
        } 
    },
    { text: '珊瑚头饰', action: function () {
            h5gg.setValue(toushi, -1768270382, 'I32');
        } 
    },
    { text: '蓝色音乐会', action: function () {
            h5gg.setValue(toushi, -955206331, 'I32');
        } 
    },
    { text: '生日王冠', action: function () {
            h5gg.setValue(toushi, 333553741, 'I32');
        } 
    },
    { text: '绊爱蝴蝶结', action: function () {
            h5gg.setValue(toushi, -570479975, 'I32');
        } 
    },
    { text: '关闭', action: function () {
            closeModal();
        } 
    }
];
openDialogAndAddButtons(buttons, '选择头饰');
});
qt.addEventListener('click', () => {
const buttons = [
    { text: '裙子先祖', action: function () {
            h5gg.setValue(kuzhi, 1593516145, 'I32');
        } 
    },
    { text: '黑色胖子', action: function () {
            h5gg.setValue(kuzhi, -840740177, 'I32');
        } 
    },
    { text: '狐狸先生', action: function () {
            h5gg.setValue(kuzhi, 801819898, 'I32');
        } 
    },
    { text: '瘦长大哥', action: function () {
            h5gg.setValue(kuzhi, 1021189534, 'I32');
        } 
    },
    { text: '墓土守卫', action: function () {
            h5gg.setValue(kuzhi, 1154523481, 'I32');
        } 
    },
    { text: '大黑胖子', action: function () {
            h5gg.setValue(kuzhi, 599960964, 'I32');
        } 
    },
    { text: '胖子先祖', action: function () {
            h5gg.setValue(kuzhi, 764327266, 'I32');
        } 
    },
    { text: '小王子', action: function () {
            h5gg.setValue(kuzhi, 182380113, 'I32');
        } 
    },
    { text: '全白套装', action: function () {
            h5gg.setValue(kuzhi, 1887022437, 'I32');
        } 
    },
    { text: '恐怖雪人', action: function () {
            h5gg.setValue(kuzhi, 1151349110, 'I32');
        } 
    },
    { text: '虚荣先祖', action: function () {
            h5gg.setValue(kuzhi, 259920137, 'I32');
        } 
    },
    { text: '隐身衣服', action: function () {
            h5gg.setValue(kuzhi, -1021066035, 'I32');
        } 
    },
    { text: '人物雪球', action: function () {
            h5gg.setValue(kuzhi, 2113669861, 'I32');
        } 
    },
    { text: '关闭', action: function () {
            closeModal();
        } 
    }
];
openDialogAndAddButtons(buttons, '变成先祖');
});
