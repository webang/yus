<template>
  <div class="cell">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="标题" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell title="标题" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示标题</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="标题"></Cell>
          <Cell title="标题"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示图标</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="标题">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell title="标题">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示内容</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="标题" value="内容">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell title="标题" value="内容">
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">展示箭头</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="标题" value="内容" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
          <Cell title="标题" value="内容" is-link>
            <img slot="media" src="https://avatars0.githubusercontent.com/u/35128?s=64&v=4" alt="" width="20" height="20">
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
export default {
  components: {
    Cell,
    CellGroup
  }
}
</script>
