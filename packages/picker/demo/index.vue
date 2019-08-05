<template>
  <div class="yus-demo yus-demo-picker">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-picker :columns="list1" :header="false"></yus-picker>
        </div>
      </div>

      <div class="yus-demo-block__hd">popup模式</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-cell>
            <div slot="title">
              <span v-if="v1">{{ v1 }}</span>
              <span v-else style="color: #ccc">请选择</span>
            </div>
            <yus-switch slot="value" title="切换显示" v-model="visible2"></yus-switch>
          </yus-cell>
          <yus-picker
            popup
            v-model="visible2"
            :columns="list1"
            @confirm="handleConfirm1"
            @cancel="handleCcancel1"
            @column-change="handleColumnChange1"
          />
        </div>
      </div>

      <div class="yus-demo-block__hd">联级模式</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-cell>
            <div slot="title">
              <span v-if="cityValue.length">{{ cityName }}</span>
              <span v-else style="color: #ccc">请选择</span>
            </div>
            <yus-switch slot="value" title="切换显示" v-model="cityVisible"></yus-switch>
          </yus-cell>
          <yus-picker
            popup
            v-model="cityVisible"
            labelKey="areaName"
            :columns="cityColumns"
            @confirm="handleConfirm2"
            @cancel="handleCcancel2"
            @column-change="handleColumnChange2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityList from './city.json';

export default {
  data() {
    return {
      v1: '',
      visible2: false,
      list1: [
        {
          values: ['苹果', '香蕉', '荔枝', '雪梨', '桂圆', '桔子'],
          defaultIndex: 0
        }
      ],

      cityValue: [],
      cityColumns: [],
      cityVisible: false,
      cityList: cityList
    };
  },

  computed: {
    cityName () {
      return this.cityValue.filter(item => item).map(item => item.areaName).join('');
    }
  },

  mounted() {
    const pList = cityList.map(element => element);
    const cList = cityList[0].children.map(element => element);
    const aList = cList[0].children.map(element => element);
    this.cityColumns = [
      {
        values: pList,
        defaultIndex: 0
      },
      {
        values: cList,
        defaultIndex: 0
      },
      {
        values: aList,
        defaultIndex: 4
      }
    ];
  },

  methods: {
    handleConfirm1(picker, values, indexs) {
      this.v1 = values.join(' ');
      this.visible2 = false;
    },

    handleCcancel1() {
      this.visible2 = false;
    },

    handleColumnChange1(picker, column, index) {
      console.log(column, index);
    },

    handleConfirm2(picker, values, indexs) {
      this.cityValue = values;
      this.cityVisible = false;
    },

    handleCcancel2() {
      this.cityVisible = false;
    },

    handleColumnChange2(picker, column, index) {
      if (column === 0) {
        const cList = cityList[index]['children'] || [];
        const aList = cList.length ? cList[0]['children'] : [];
        this.cityColumns[1]['values'] = cList;
        this.cityColumns[2]['values'] = aList;

        picker.setColumnIndex(1, 0);
        picker.setColumnIndex(2, 0);

      } else if (column === 1) {
        const [pIndex, cIndex, aIndex] = picker.getIndexs();
        const aList = cityList[pIndex]['children'][cIndex]['children'] || [];

        this.cityColumns[2]['values'] = aList;
        picker.setColumnIndex(2, 0);
      }
    }
  }
};
</script>
