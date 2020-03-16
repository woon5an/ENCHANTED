<template>
  <div class="usertable">
    <h1>总用户列表</h1>
    <el-button type="success"
               plain
               @click="cuser"
               style="margin-bottom:5px;">新增用户</el-button>
    <el-table :data="items"
              border
              style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
      <el-table-column prop="_id"
                       label="ID">
      </el-table-column>
      <el-table-column prop="avatar"
                       label="头像">
      </el-table-column>
      <el-table-column prop="username"
                       label="用户名">
      </el-table-column>
      <el-table-column prop="sex"
                       label="性别">
      </el-table-column>
      <el-table-column prop="emailnum"
                       label="邮箱号">
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="180">
        <template slot-scope="scope">
          <el-button type="text"
                     icon="el-icon-edit"
                     size="small"
                     @click="edit(scope.row._id)">编辑</el-button>
          <el-button type="text"
                     size="small"
                     icon="el-icon-delete"
                     @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>

      <el-dialog :visible.sync="cuserVisible"
                 :append-to-body="true"
                 center
                 width="35%">
        <h1>{{model.username? '编辑' : '新建'}}用户</h1>
        <el-form :inline="true"
                 label-width="200px">
          <el-form-item label="用户名">
            <el-input v-model="model.username"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password"
                      v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱号">
            <el-input v-model="model.emailnum"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="model.sex"
                       placeholder="性别">
              <el-option label="男"
                         value="male"></el-option>
              <el-option label="女"
                         value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="头像">
            <el-input v-model="model.avatar"
                      autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="cuserVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="save()">确 定</el-button>
        </div>
      </el-dialog>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'User',
  components: {
  },
  data () {
    return {
      items: [],
      cuserVisible: false,
      formLabelWidth: '120px',
      model: {},
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('rest/users')
      this.items = res.data
    },
    async cuser () {
      this.cuserVisible = true
      this.model = {}
    },
    async save () {
      let res
      if (this.model._id) {
        res = await this.$http.put(`rest/users/${this.model._id}`, this.model)
      } else {
        res = await this.$http.post('rest/users', this.model)
      }
      this.fetch()
      this.$message({
        type: 'success',
        message: '创建成功',
      })
      this.cuserVisible = false
    },
    async edit (id) {
      this.cuserVisible = true
      const res = await this.$http.get(`rest/users/${id}`)
      this.model = res.data
    },
    async remove (row) {
      this.$confirm(`是否确定要删除？"${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        await this.$http.delete(`rest/users/${row._id}`)
        this.$message({
          type: 'success',
          $message: '删除成功',
        })
        this.fetch()
      })
    },
  },
  created () {
    this.fetch()
  },
}
</script>
