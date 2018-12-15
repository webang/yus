<template>
  <div class="cell">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="标题" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell label="标题" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示标题和图标</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="标题">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell label="标题">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示内容</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="标题" value="内容">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell label="标题" value="内容">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示箭头</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="标题" value="内容" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell label="标题" value="内容" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">路由调转</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="to调转" value="内容" is-link to="/">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" width="20" height="20">
          </Cell>
          <Cell label="url调转" value="内容" is-link url="http://mobile.huishoubao.com/web/m6/model/?pid=1257">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">点击效果</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="标题" clickable></Cell>
          <Cell label="标题" clickable></Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'ymu'
export default {
  components: {
    Cell,
    CellGroup
  }
}
</script>
