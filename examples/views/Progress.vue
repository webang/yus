<template>
  <div class="page page-switch">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell>
            <div slot="label" class="ym-ui-flex" style="width: 100%">
              <Progress :percentage="10" style="width: 100%">
                <span slot="start" class="label">提升率</span>
              </Progress>
            </div>
          </Cell>
          <Cell>
            <div slot="label" class="ym-ui-flex" style="width: 100%">
              <Progress :percentage="50" style="width: 100%">
                <span slot="start" class="label">提升率</span>
                <span slot="end" class="right">50%</span>
              </Progress>
            </div>
          </Cell>
          <Cell>
            <div slot="label" class="ym-ui-flex" style="width: 100%">
              <Progress :percentage="100" style="width: 100%">
                <span slot="start" class="label">提升率</span>
                <span slot="end" class="right">100%</span>
              </Progress>
            </div>
          </Cell>
          <Cell>
            <div slot="label" class="ym-ui-flex" style="width: 100%">
              <Progress :percentage="percentage" style="width: 100%">
                <span slot="start" class="label">
                  <Button size="mini" type="primary" plain @click="percentage-=10">-10</Button>
                  <span>提升率</span>
                </span>
                <span slot="end" class="right">
                  <span>{{ percentage }}%</span>
                  <Button size="mini" type="primary" plain @click="percentage+=10">+10</Button>
                </span>
              </Progress>
            </div>
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Progress, Cell, CellGroup, Button, Switch as wSwitch } from 'ymu'
export default {
  components: {
    wSwitch,
    Cell,
    CellGroup,
    Progress,
    Button
  },
  data () {
    return {
      percentage: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  margin-right: 5px;
}
.right {
  margin-left: 5px;
}
</style>
